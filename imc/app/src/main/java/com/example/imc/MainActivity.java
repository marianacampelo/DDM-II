package com.example.imc;

import android.os.Bundle;

import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;

import android.view.View;



import com.example.imc.databinding.ActivityMainBinding;

import android.view.Menu;
import android.view.MenuItem;

import java.text.BreakIterator;

public class MainActivity {

    private BreakIterator inputpeso;
    private BreakIterator inputaltura;

    public void imc(View view) {
        double peso = Double.parseDouble(inputpeso.getText().toString());
        double altura = Double.parseDouble(inputaltura.getText().toString());
        double imc = peso / (altura * altura);
    }
}



