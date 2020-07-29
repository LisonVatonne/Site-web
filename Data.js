
DocumentsListe = 
{
    Troisième: 
    {
        Ecriture: 
        [
          //["Nom du fichier sans extension (uniquement des pdf)", ["Liste des tags pour la recherche"]],
            ["QWPCH3Z2M0-recapitulatif-passeport", ["Tags Liste"]],
        ],
        Grammaire:
        [

        ],
        Lecture:
        [

        ]
    },
    Quatrième: 
    {
        Ecriture: 
        [

        ],
        Grammaire:
        [

        ],
        Lecture:
        [

        ]
    },
    Cinquième: 
    {
        Ecriture: 
        [

        ],
        Grammaire:
        [

        ],
        Lecture:
        [

        ]
    },
    Sixième: 
    {
        Ecriture: 
        [

        ],
        Grammaire:
        [

        ],
        Lecture:
        [

        ]
    },
}


var ScriptToAdd = ["Script/AnimationBilles.js"]



function SetupPage(){
    var head = document.getElementsByTagName('head')[0];
    for (let index = 0; index < ScriptToAdd.length; index++) {
        var script = document.createElement("script");
        script.src = ScriptToAdd[index];
        head.appendChild(script)
    }
}





class HtmlManipulator
{

    static LoadDocument(Classe, Type, Name)
    {
        HtmlManipulator.SetupPage(Classe + "/" + Type, Name)
    }


    static SetupPage(folder, file){
        let url = new URL("Document.html", document.location.href);
        url.searchParams.append('folder', folder);
        url.searchParams.append('file', file);
        document.location.href = url;
    }

    static GetFile(){
        let params = (new URL(document.location)).searchParams;
        return params.get('file');
    }

    static GetFolder(){
        let params = (new URL(document.location)).searchParams;
        return params.get('folder');
    }
}