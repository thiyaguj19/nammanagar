from django.shortcuts import render

def nagarhome(request):
    context = {'text': 'This is some text to be rendered as HTML.'}
    return render(request, 'index.html', context)
