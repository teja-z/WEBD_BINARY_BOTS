from django.shortcuts import render

def index(request):
    return render(request, 'games/index.html')

def rps(request):
    return render(request, 'games/rps.html')

def guess(request):
    return render(request, 'games/guess.html')

def tictactoe(request):
    return render(request, 'games/tictactoe.html')
