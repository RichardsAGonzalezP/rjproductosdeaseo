# Generated by Django 5.0.6 on 2024-05-24 19:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("catalogo", "0006_remove_interes_producto_remove_interes_usuario_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="producto",
            name="aroma",
            field=models.CharField(default="Sin aroma", max_length=50),
        ),
        migrations.AddField(
            model_name="producto",
            name="tamaño",
            field=models.CharField(default="1L", max_length=50),
        ),
    ]
