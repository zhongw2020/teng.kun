dotnet build

cd src/ui/ng-alain
npm install && npm run-script build && del ..\..\teng.kun.Web\wwwroot\* /q && copy dist\* ..\..\teng.kun.Web\wwwroot\ && cd ..\..\teng.kun.Web && dotnet build -c Release && dotnet publish -c Release && cd ..\..\ && docker build -t teng.kun.web .
