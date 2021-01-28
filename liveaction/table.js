document.getElementById("table").innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Simple Project</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <!--
    
    ///////////////////////////////////////////////
    [       Static Page for Soccer Matches        ]
    ///////////////////////////////////////////////
    [            by Ezat Zaino on Github          ]
    ///////////////////////////////////////////////
    [       Make it dynamic with : Php , Js       ]
    ///////////////////////////////////////////////
    
    -->
    
    <!-- Next Update i'll Add dark & light Mode -->
    
    <!-- [Title] -->
    
    <h1 class="header">مباريات اليوم</h1>
    
    <!-- [Scroll Teams logos]
    
    <div class="teams">
        <div class="scroller">
            <div id="tm">
                <img src="/logo.png" alt="Team Logo" />
                <p>Team Name FC 1</p>
                <div class="hot">Hot Team!</div>
            </div>
            <div id="tm">
                <img src="/logo.png" alt="Team Logo" />
                <p>Team Name FC 2</p>
            </div>
            <div id="tm">
                <img src="/logo.png" alt="Team Logo" />
                <p>Team Name FC 3</p>
            </div>
            <div id="tm">
                <img src="/logo.png" alt="Team Logo" />
                <p>Team Name FC 4</p>
            </div>
        </div>
    </div>
    
    -->
    
    <!-- [ Team One Table ] -->
    
    <div class="main-table">
        <div class="table">
            <div class="team">
                <img src="https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png" alt="Team Logo" />
                <div id="team-name">
                    <p>اتلتيكو مدريد</p>
                </div>
            </div>
            
            <div class="result">
                <div id="numb">
                    <p><strong>لم تبدأ</strong></p>
                </div>
            </div>
            
            <div class="team">
                <img src="https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png" alt="Team Logo" />
                <div id="team-name">
                    <p>ريال مدريد</p>
                </div>
            </div>
        </div>
        <div class="info">
            <div class="ch">
                <p>Bein Sports HD</p>
            </div>
            <div class="com">
                <p>رؤوف خليف</p>
            </div>
            <div class="time">
                <p>8:00 PM</p>
            </div>
        </div>
    </div>
    
    <!-- Table Two -->
    
    <div class="main-table">
        <div class="table">
            <div class="team">
                <img src="https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png" alt="Team Logo" />
                <div id="team-name">
                    <p>برشلونة</p>
                </div>
            </div>
          
            <div class="result">
                <div id="numb">
                    <p><strong>0 - 0</strong></p>
                </div>
            </div>
            
            <div class="team">
                <img src="https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png" alt="Team Logo" />
                <div id="team-name">
                    <p>ريال مدريد</p>
                </div>
            </div>
        </div>
        <div class="info">
            <div class="ch">
                <p>Bein Sports HD 2</p>
            </div>
            <div class="com">
                <p>يوسف سيف</p>
            </div>
            <div class="time">
                <p>10:00 PM</p>
            </div>
        </div>
    </div>
    
    <!-- Footer [Update Date] 
    
    <p class="footer">28/1/2021</p>
    
    -->
    
    <!-- Delete this part of code from here -->
    
    <!-- Dont need it
    
    <script>
        alert("Check last updates on https://github.com/eztza")
        alert("Welcome ! on simple soccer match table , i make it just for fun Enjoy (:")
    </script>
    
   -->
    
    <!-- to here -->
    
</body>
</html>
`
