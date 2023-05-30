class Encrypter{
    encrypt(stringToEncrypt){ // hier geef je de string die je wilt encrypten mee
        stringToEncrypt = stringToEncrypt.toUpperCase(); // hier zet je hem om naar hoofdletters
        let encryptedString = []; // hier maak je een lege array aan waar je de nieuwe string in gaat pushen
        for(let i = 0; i < stringToEncrypt.length; i++){ // hier loop je door de string die geencrypt moet worden heen
            switch(stringToEncrypt[i]){ // hier zet je alle letters om naar andere en die push je in de lege array
                case "A":
                    encryptedString.push("D");
                    break;
                case "B":
                    encryptedString.push("E");
                    break;
                case "C":
                    encryptedString.push("F");
                    break;
                case "D":
                    encryptedString.push("G");
                    break;
                case "E":
                    encryptedString.push("H");
                    break;
                case "F":
                    encryptedString.push("I");
                    break;
                case "G":
                    encryptedString.push("J");
                    break;
                case "H":
                    encryptedString.push("K");
                    break;
                case "I":
                    encryptedString.push("L");
                    break;
                case "J":
                    encryptedString.push("M");
                    break;
                case "K":
                    encryptedString.push("N");
                    break;
                case "L":
                    encryptedString.push("O");
                    break;
                case "M":
                    encryptedString.push("P");
                    break;
                case "N":
                    encryptedString.push("Q");
                    break;
                case "O":
                    encryptedString.push("R");
                    break;
                case "P":
                    encryptedString.push("S");
                    break;
                case "Q":
                    encryptedString.push("T");
                    break;
                case "R":
                    encryptedString.push("U");
                    break;
                case "S":
                    encryptedString.push("V");
                    break;
                case "T":
                    encryptedString.push("W");
                    break;
                case "U":
                    encryptedString.push("X");
                    break;
                case "V":
                    encryptedString.push("Y");
                    break;
                case "W":
                    encryptedString.push("Z");
                    break;
                case "X":
                    encryptedString.push("A");
                    break;
                case "Y":
                    encryptedString.push("B");
                    break;
                case "Z":
                    encryptedString.push("C");
                    break;
                default: // hier zet je als hij er niet tussen staat dat hij zichzelf mag blijven
                    encryptedString.push(stringToEncrypt[i]);
                    break;
            }
        }
        encryptedString = encryptedString.join(""); // hier verzorg je ervoor dat het aan elkaar komt
        return encryptedString; // hier return je de encrypted string
    }
}