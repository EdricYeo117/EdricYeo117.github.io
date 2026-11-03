Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$bitmap = [System.Drawing.Bitmap]::new($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

try {
    $background = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
        [System.Drawing.Point]::new(0, 0),
        [System.Drawing.Point]::new($width, $height),
        [System.Drawing.ColorTranslator]::FromHtml('#0B111B'),
        [System.Drawing.ColorTranslator]::FromHtml('#172943')
    )
    $graphics.FillRectangle($background, 0, 0, $width, $height)
    $background.Dispose()

    $accent = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml('#A8C7FF'))
    $white = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml('#F4F7FC'))
    $muted = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml('#AABBD3'))
    $line = [System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml('#42628C'), 2)
    $fontFamily = 'Segoe UI'
    $eyebrow = [System.Drawing.Font]::new($fontFamily, 23, [System.Drawing.FontStyle]::Bold)
    $title = [System.Drawing.Font]::new($fontFamily, 74, [System.Drawing.FontStyle]::Bold)
    $subtitle = [System.Drawing.Font]::new($fontFamily, 32, [System.Drawing.FontStyle]::Regular)
    $small = [System.Drawing.Font]::new($fontFamily, 22, [System.Drawing.FontStyle]::Regular)

    try {
        $graphics.FillEllipse($accent, 82, 95, 11, 11)
        $graphics.DrawString('SOFTWARE ENGINEER  ·  SINGAPORE', $eyebrow, $accent, 108, 82)
        $graphics.DrawString('Edric Yeo.', $title, $white, 70, 168)
        $graphics.DrawString('From an idea to a', $subtitle, $white, 76, 305)
        $graphics.DrawString('working system.', $subtitle, $accent, 76, 350)
        $graphics.DrawLine($line, 78, 461, 682, 461)
        $graphics.DrawString('Applied AI  ·  Cloud  ·  Full-stack', $small, $muted, 77, 485)
        $graphics.DrawString('edric-yeo.com', $small, $accent, 77, 545)

        $portrait = [System.Drawing.Image]::FromFile((Join-Path $PSScriptRoot '..\src\assets\profile.jpg'))
        try {
            $target = [System.Drawing.Rectangle]::new(793, 74, 331, 480)
            $sourceWidth = [int]($portrait.Height * $target.Width / $target.Height)
            $sourceX = [int](($portrait.Width - $sourceWidth) / 2)
            $source = [System.Drawing.Rectangle]::new($sourceX, 0, $sourceWidth, $portrait.Height)
            $graphics.DrawImage($portrait, $target, $source, [System.Drawing.GraphicsUnit]::Pixel)
            $graphics.DrawRectangle($line, $target)
        }
        finally {
            $portrait.Dispose()
        }
    }
    finally {
        $accent.Dispose()
        $white.Dispose()
        $muted.Dispose()
        $line.Dispose()
        $eyebrow.Dispose()
        $title.Dispose()
        $subtitle.Dispose()
        $small.Dispose()
    }

    $output = Join-Path $PSScriptRoot '..\public\social-preview.jpg'
    $bitmap.Save($output, [System.Drawing.Imaging.ImageFormat]::Jpeg)
}
finally {
    $graphics.Dispose()
    $bitmap.Dispose()
}
