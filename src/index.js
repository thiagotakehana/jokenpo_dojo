const jogarJokenpo = (maoA, maoB) => {
    const j = [maoA, maoB].sort();
    
    if(j[0] == "PAPEL"){
        if(j[1] == "TESOURA")
            return j[1];
        else if(j[1] == "PEDRA")
            return j[0];
        else
            return "EMPATE";
    }

    if(j[0] == "TESOURA"){
        if(j[1] == "PEDRA")
            return j[1];
        else if(j[1] == "PAPEL")
            return j[0];
        else
            return "EMPATE";
    }

    if(j[0] == "PEDRA"){
        if(j[1] == "PAPEL")
            return j[1];
        else if(j[1] == "TESOURA")
            return j[0];
        else
            return "EMPATE";
    }
}

module.exports = jogarJokenpo;