package com.example.myapplication

import android.os.Bundle
import android.webkit.JavascriptInterface
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity

class MainActivity : ComponentActivity() {

    private lateinit var webView: WebView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)

        val webSettings: WebSettings = webView.settings
        webSettings.javaScriptEnabled = true

        val nativeBridgeForJavascript = NativeBridge(this)
        webView.addJavascriptInterface(nativeBridgeForJavascript, "NativeBridge")
        webView.settings.cacheMode = WebSettings.LOAD_NO_CACHE

        webView.loadUrl("http://10.0.2.2:3000")
        webView.webViewClient = WebViewClient()
    }
}