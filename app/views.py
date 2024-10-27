from django.shortcuts import render, redirect
from .models import Nave, Nave_Certa, Pato

# Create your views here.

def home(request):
    return render(request,'home.html')

def naves(request):

    naves_front = {
        'naves': Nave_Certa.objects.all()
    }
    #Nave_Certa.objects.all().delete() #Para deletar todos os registros
    
    return render(request,'naves.html',naves_front)

def criarNave(request):
   
    nova_nave = Nave_Certa()

    nova_nave.tamanho = request.POST.get('tamanho')
    nova_nave.cor = request.POST.get('cor')
    nova_nave.local_queda = request.POST.get('local_queda')
    nova_nave.armamento = request.POST.get('armamento')
    nova_nave.combustivel = request.POST.get('combustivel')
    nova_nave.tripulantes = request.POST.get('tripulantes')
    nova_nave.avaria = request.POST.get('avaria')
    nova_nave.potencial_prospecção_tecnologico = request.POST.get('potencial_prospecção_tecnologico')
    nova_nave.periculosidade = request.POST.get('periculosidade')
    
    lista_etiquetas = []

    nova_nave.potencial_prospecção_tecnologico = int(nova_nave.potencial_prospecção_tecnologico)
    nova_nave.periculosidade = int(nova_nave.periculosidade)
    if "nenhum" in nova_nave.tripulantes.lower():
        lista_etiquetas.append("Nave de Fugitivos")

    if nova_nave.armamento in ["Nuclear", "Pesado"]:
        lista_etiquetas.append("Arsenal Alienígena")

    if nova_nave.combustivel in ["Antimatéria", "Plasma"]:
        lista_etiquetas.append("Fonte de Energia Alternativa")

    if nova_nave.periculosidade >= 7:
        if nova_nave.tamanho in ["Gigantesca", "Grande"]:
            lista_etiquetas.append("Estrela da Morte")
        else:
            lista_etiquetas.append("Ameaça em Potencial")

    if nova_nave.potencial_prospecção_tecnologico >= 7:
        if nova_nave.tamanho in ["Gigantesca", "Grande"]:
            lista_etiquetas.append("Apice da Tecnologia")
        else:
            lista_etiquetas.append("Joia Tecnológica")

    elif nova_nave.potencial_prospecção_tecnologico < 7 or nova_nave.avaria in ["Perda total", "Muito destruída"]:
        lista_etiquetas.append("Sucata Espacial")
    else:
        lista_etiquetas.append("Nave Espacial Normal")
    
    str_etiquetas = f"{', '.join(lista_etiquetas)}"
    nova_nave.etiquetas = str_etiquetas
    

    nova_nave.save()
    
    naves_front = {
        'naves': Nave_Certa.objects.all()
    }
    
    return redirect(naves)

def patos(request):

    return render(request,'patos.html')

