@ECHO off
SETLOCAL
CALL :find_dp0
"%dp0%\..\jsbarcode\bin\exceptions\exceptions.js"   %*
ENDLOCAL
EXIT /b %errorlevel%
:find_dp0
SET dp0=%~dp0
EXIT /b
