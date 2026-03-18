$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Listening on port $port..."
while ($listener.IsListening) {
    $context = $listener.GetContext()
    $response = $context.Response
    $path = $context.Request.Url.LocalPath.TrimStart('/')
    if ($path -eq "") { $path = "index.html" }
    $fullPath = Join-Path "h:\My Drive\Insurance\Insurance\Marketing\I want a New Plan\DVA" $path
    if (Test-Path $fullPath) {
        if ($path.EndsWith(".css")) { $response.ContentType = "text/css" }
        elseif ($path.EndsWith(".js")) { $response.ContentType = "application/javascript" }
        else { $response.ContentType = "text/html" }
        $content = Get-Content $fullPath -Raw
        $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
        $response.ContentLength64 = $buffer.Length
        $response.OutputStream.Write($buffer, 0, $buffer.Length)
    } else {
        $response.StatusCode = 404
    }
    $response.Close()
}
