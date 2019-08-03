@echo off
echo Insert commit message:
set /p msg=
call ng build --prod --base-href "https://dshell321.github.io/mymi-web/"
call ngh --dir=dist/mymi-web --message="%msg%"
echo Build complete and published.
pause