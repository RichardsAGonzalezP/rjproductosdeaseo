# forms.py en catalogo/
from django import forms
from .models import Producto, Categoria, ProductoImagen
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit

class ProductoForm(forms.ModelForm):
    class Meta:
        model = Producto
        fields = ['nombre', 'categoria', 'precio', 'descripcion']
        widgets = {
            'nombre': forms.TextInput(attrs={'placeholder': 'Ingrese el nombre del producto'}),
            'precio': forms.NumberInput(attrs={'placeholder': 'Ingrese el valor', 'min': 0}),
            'descripcion': forms.Textarea(attrs={'placeholder': 'Ingrese la descripción del producto', 'rows': 5}),
        }

class ProductoImagenForm(forms.ModelForm):
    class Meta:
        model = ProductoImagen
        fields = ['imagen']

class CategoriaForm(forms.ModelForm):
    class Meta:
        model = Categoria
        fields = ['nombre']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_method = 'post'
        self.helper.add_input(Submit('submit', 'Guardar'))
