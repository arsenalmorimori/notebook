@echo off
setlocal enabledelayedexpansion

:: ========================================
:: DUPLICATE AND COMPRESS IMAGES
:: Target maximum size: 30 KB
:: ========================================

:: 30 KB = 30 * 1024 = 30720 bytes
set maxSize=30720

:: Starting compression quality
set startQuality=90

:: Create output folder
set "output=%cd%\thumbnails"
if not exist "%output%" mkdir "%output%"

echo ----------------------------------------
echo DUPLICATING AND COMPRESSING IMAGES
echo Target maximum size: 30 KB
echo Output folder: %output%
echo ----------------------------------------
echo.

:: Process all supported image formats
for %%I in (*.jpg *.jpeg *.png *.webp) do (
    if exist "%%I" (
        set "filename=%%~nI"
        set "ext=%%~xI"
        set "source=%%~fI"
        set "outputFile=%output%\!filename!!ext!"

        echo Processing: %%~nxI

        :: Get original file size
        for %%A in ("!source!") do set origSize=%%~zA

        :: If already <= 30 KB, just copy
        if !origSize! LEQ %maxSize% (
            echo Original size is already below 30 KB (^!origSize! bytes^). Copying...
            copy /y "!source!" "!outputFile!" >nul
        ) else (
            :: Begin compression
            set quality=%startQuality%
            set done=false

            echo Starting compression from quality !quality!...

            for /l %%Q in (1,1,40) do (
                if "!done!"=="false" (
                    magick "!source!" -quality !quality! "!outputFile!"

                    :: Check compressed file size
                    for %%B in ("!outputFile!") do set newSize=%%~zB

                    if !newSize! LEQ %maxSize% (
                        echo Reached target size: !newSize! bytes
                        set done=true
                    ) else (
                        if !quality! GTR 5 (
                            set /a quality-=5
                            echo Size !newSize! too large, lowering quality to !quality!...
                        ) else (
                            echo ^> Cannot reduce quality below 5. Final size: !newSize! bytes
                            set done=true
                        )
                    )
                )
            )
        )

        echo Finished: !filename!_thumbnail!ext!
        echo.
    )
)

echo ========================================
echo All images processed successfully!
pause
exit
