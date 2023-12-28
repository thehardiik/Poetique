* {
    margin: 0;
    padding: 0;
}

html , body {
    height: 100%;
    width: 100%;
    
    
}
#Poetique {
    margin-left: 2vw;
    font-family: 'Josefin Sans', sans-serif;
    color: #371313;
}
#nav {
    background-color: white;

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 7vmax;
    width: 100vw;
}

#navLeft{
    display: flex;
    width: 65vw;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
}

a {
    color: #371313;
    text-decoration: none;
}

#search {
    padding: 0 2vw;
    height: 60%;
    width: 20vw;
    border: 1px solid;
    border-radius: 50px;
    margin-right: 1vw;
    
}

#button {
    height: 56px;
    width: 56px;
    border: 1px solid black;
    border-radius: 100%;
    background-color: #371313;
    color: aliceblue;
    font-size: larger;
    font-weight: 1000;
}

#button:active{
    background-color: F3EDC8;
    color: black;
}

#button:hover{
    background-color: #BF3131;
    
    cursor: pointer;
}

#rightNav {
    margin-right: 3vw;
    font-size: 3vmax
}

#main {
    height: calc(100vh - 7vw);
    width: 100%;
    display: flex;
    flex-direction: row;
}
#left {
    position: relative;
    min-height: 100%;
    width: 50%;
    padding: 10px;
    display: flex;
    justify-content: center;
}

#cursor {
    scale: 0;
    opacity: 0;
    position: absolute;
    background-color: #C1F2B0;
    height: 10vw;
    width: 10vw;
    border-radius: 50%;
}
#left img{
    height: 40vw;
    width: 40vw;
    background-size: cover;
    object-fit: cover;
    object-position: center;
}

#right {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    
}

#right p {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 5px;
}

#right h1 {
    margin-top: 1.8vw;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-bottom: 1.5vw;
    max-width: 40vw;
}

#right h6 {
    text-align: center;
    margin-top: 0.8vw;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#Welcome {
    
    margin-bottom: 2vw;
    
    font-size: 3vw;
    font-weight: 800;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}

#text {
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
}


@media (max-width: 500px){

    
    #Poetique {
        font-size: large;
    }

    #search {
        height: 5vh;
        width: 20vh;
    }

    #button {
        height: 5vh;
        width: 5vh;
        font-size: small;
        margin-right: 5px;
    }

    #rightNav {
        display: none;
    }

    #main {
        flex-direction: column;
    }

    #right {
        display: flex;
        margin-left: 5vw;
        
        
        justify-content: center;
        width: 100%;
    }

    #right h1 {
        width: 100vw;
        font-size: medium;
        margin-bottom: 5vh;
        
    }

    #Welcome {
        width: 100vw;
        font-size: medium;
    }

    #right p {
        font-size: small;
    }

    #text p {
        font-size: small;
    }

    #left {
        display: none;
    }


    
}
