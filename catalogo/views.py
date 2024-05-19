# views.py en catalogo/
from django.shortcuts import render, redirect, get_object_or_404
from .models import Producto, Categoria, ProductoImagen, Interes, Usuario
from django.contrib.auth.decorators import login_required, user_passes_test
from .forms import ProductoForm, ProductoImagenForm, CategoriaForm
from django.forms import modelformset_factory
from django.contrib.auth import logout


def index(request):
    productos = Producto.objects.all()
    return render(request, 'catalogo/index.html', {'productos': productos})

def quienes_somos(request):
    return render(request, 'catalogo/quienes_somos.html')

def catalogo(request):
    query = request.GET.get('q')
    categorias = Categoria.objects.all()
    productos = Producto.objects.all()
    if query:
        productos = productos.filter(nombre__icontains=query)
    return render(request, 'catalogo/catalogo.html', {'categorias': categorias, 'productos': productos})

@login_required
def profile(request):
    return render(request, 'catalogo/profile.html')


@login_required
@user_passes_test(lambda u: u.is_staff)
def admin_productos(request):
    productos = Producto.objects.all()
    productos_con_imagenes = []

    for producto in productos:
        imagenes = ProductoImagen.objects.filter(producto=producto)
        productos_con_imagenes.append({'producto': producto, 'imagenes': imagenes})

    return render(request, 'catalogo/admin_productos.html', {'productos_con_imagenes': productos_con_imagenes})


@user_passes_test(lambda u: u.is_staff)
@login_required
def admin_categorias(request):
    categorias = Categoria.objects.all()
    return render(request, 'catalogo/admin_categorias.html', {'categorias': categorias})

def interes(request):
    if request.method == 'POST':
        usuario = Usuario.objects.get(email=request.POST['email'])
        producto = Producto.objects.get(id=request.POST['producto_id'])
        comentario = request.POST['comentario']
        Interes.objects.create(usuario=usuario, producto=producto, comentarios=comentario)
        return redirect('index')
    return render(request, 'catalogo/interes.html')

@login_required
@user_passes_test(lambda u: u.is_staff)
def crear_producto(request):
    if request.method == 'POST':
        form = ProductoForm(request.POST)
        if form.is_valid():
            producto = form.save()
            for img in request.FILES.getlist('imagenes'):
                ProductoImagen.objects.create(producto=producto, imagen=img)
            return redirect('admin_productos')
    else:
        form = ProductoForm()
    return render(request, 'catalogo/crear_producto.html', {'form': form})

@login_required
@user_passes_test(lambda u: u.is_staff)
def editar_producto(request, id):
    producto = get_object_or_404(Producto, id=id)
    if request.method == 'POST':
        form = ProductoForm(request.POST, instance=producto)
        if form.is_valid():
            form.save()
            for img in request.FILES.getlist('imagenes'):
                ProductoImagen.objects.create(producto=producto, imagen=img)
            return redirect('admin_productos')
    else:
        form = ProductoForm(instance=producto)
    imagenes = ProductoImagen.objects.filter(producto=producto)
    return render(request, 'catalogo/editar_producto.html', {'form': form, 'imagenes': imagenes, 'producto': producto})

@login_required
@user_passes_test(lambda u: u.is_staff)
def eliminar_producto(request, id):
    producto = get_object_or_404(Producto, id=id)
    if request.method == 'POST':
        producto.delete()
        return redirect('admin_productos')
    return render(request, 'catalogo/eliminar_producto.html', {'producto': producto})

@user_passes_test(lambda u: u.is_staff)
@login_required
def crear_categoria(request):
    if request.method == "POST":
        form = CategoriaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('admin_categorias')
    else:
        form = CategoriaForm()
    return render(request, 'catalogo/crear_categoria.html', {'form': form})

@user_passes_test(lambda u: u.is_staff)
@login_required
def editar_categoria(request, id):
    categoria = get_object_or_404(Categoria, id=id)
    if request.method == 'POST':
        form = CategoriaForm(request.POST, instance=categoria)
        if form.is_valid():
            form.save()
            return redirect('admin_categorias')
    else:
        form = CategoriaForm(instance=categoria)
    return render(request, 'catalogo/editar_categoria.html', {'form': form})

@user_passes_test(lambda u: u.is_staff)
@login_required
def eliminar_categoria(request, id):
    categoria = get_object_or_404(Categoria, id=id)
    if request.method == 'POST':
        categoria.delete()
        return redirect('admin_categorias')
    return render(request, 'catalogo/eliminar_categoria.html', {'categoria': categoria})

@login_required
def logout_confirm(request):
    if request.method == 'POST':
        logout(request)
        return redirect('index')
    return render(request, 'catalogo/logout_confirm.html')

@login_required
@user_passes_test(lambda u: u.is_staff)
def eliminar_imagen(request, id):
    imagen = get_object_or_404(ProductoImagen, id=id)
    producto_id = imagen.producto.id
    if request.method == 'POST':
        imagen.delete()
        return redirect('editar_producto', id=producto_id)
    return render(request, 'catalogo/eliminar_imagen.html', {'imagen': imagen})
