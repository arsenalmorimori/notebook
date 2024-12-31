@echo off
setlocal enabledelayedexpansion

rem Change the directory to where the files are
cd "C:\path\to\your\folder"

rem Initialize counter
set /a counter=1

rem Loop through all files in the directory
for %%f in (*.*) do (
    rem Extract the file extension
    set "extension=%%~xf"
    
    rem Rename the file
    ren "%%f" "magazine!counter!!extension!"
    
    rem Increment the counter
    set /a counter+=1
)

echo Files renamed successfully.
pause
