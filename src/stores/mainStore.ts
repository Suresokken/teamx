import {action, observable} from 'mobx';

import bottle from '../assets/bottle.jpg';

export class wine {
    name : string;
    detail : string[];
    type: string;
    renderMethod: string;
}




export class MainStore {
    @observable public renderMethod : any = "home";
    @observable public wines : wine[] = [
        {
            name: "FATTORIA COLLAZI",
            detail: ["Top vinen fra vinhuset COLLAZI, med ratings helt op til 95 point hos James Suckling. En udsøgt vin af en ypperlig kvalitet og lavet på de bedste håndplukkede druer.",
                     "Vinen laves på 60% Cabernet Sauvignon, 26% Merlot, 10% Cabernet Franc og 4% Petit Verdot og sammenlignes med de helt store Bordeaux vine. Den meget koncentrerede smag kendetegnet ved elegancen fra Cabernet Sauvignon, blødheden fra Merlot, kompleksiteten og aromaen fra Cabernet Franc med et touch af balsamico fra Petit Verdot – det bliver ikke meget bedre.",
                    "James Suckling skriver: ”Love the nose of dark, black fruits and flowers. Full bodied, with super silky tannins and a long caressing finish. This is very classy.”",
                    "En yderst populær vin der fra producentens side oftest er udsolgt blot to uger efter frigivelsen."],
            type: "Red",
            renderMethod: "wineOne",
            
        },
        {
            name: "CHIANTI CLASSICO",
            detail: ['Super lækker Chianti Classico. Vinen er lavet på 80% Sangiovese, 18% Merlot og 2% Black Malvasia. Vinen har næse af kirsebær, små røde frugter og krydderier, smagen er på samme tid sprød, blød og mineralsk med fine tanniner og en lang finish.',
                     'Vinen har fået flotte anmeldelser på den lokale vinfestival, og kældermester Alberto Torelli er efterfølgende blevet hyret til at forestå produktionen af Chianti Classico for ikke mindre end 14 konkurrerende producenter.',
                     'Vinen sidder ”lige i skabet” og er en meget populær fast vin i vores sortiment.',
                     'Chianti Classico navnet og det kendte hanesymbol på flaske og banderole, kræver mere end at druerne er dyrket på det godt 7.000 hektar store område. Det kræver at minimum 80% af druerne er Sangiovese. Der må blandes op til 20% af de lokale druer Canaiolo og Colorino i, og/eller Cabernet Sauvignon, Syrah og Merlot. Indtil 2006 var det tilladt at tilsætte op til 6% hvide druer.'],
                     type: "Red",
                     renderMethod: "wineTwo",
        },
        {
            name: "OTTO MURI IGT",
            detail: ['Otto Muri (”otte terrasser”) er lavet på Fiano druen, som oprindeligt vokser på Sicilien. For få år siden importerede Collazzi druen og plantede den på otte skråninger hvor jordbundsforholdene er helt exceptionelle. Mængden af vinen er således yderst begrænset, da hovedparten af den begrænsede produktion er forhånds afsat herunder til Stolten-Holm Vin.',
                    'Vinen der er lagret på ståltank har en lækker tør fedme med en særdeles interessant mineralitet.','Vinen er perfekt båden som meditationsvin og som madvin.',
                    'Om vinen er skrevet: ”Rich yellow colour, due to the permanence on yeasts until spring; variegated perfume, intense taste recalling toasted hazelnuts. Perfect for bottle ageing which endows it with elaborated finishing notes. The taste is caressing, rich and persuading with a dry finish matching well both with fish and lighter dishes.”'],
                    type: "White",
                    renderMethod: "wineThree",
        },
        {
            name: "RUGGERI CORSINI",
            detail: ['Ruggeri Corsini er en eksklusiv og mindre producent i Barolo. En lokal Michelin restaurant ejer i området fortæller at de fleste vine i deres sortiment fylder de vinkælderen op med en gang årligt. Denne potente vin måtte i kælderen hele 14 gange sidste år!',
                    'Corsini marken er en meget gammel mark med 65 år gamle vinstokke, der giver en helt speciel koncentration og kraft. Vinen, som er lagret på fad i 26 måneder, har alle de rigtige Barolo karakteristika med dufte af kirsebær, jordbær og hindbær og i bunden mørkere toner af chokolade, hasselnød, lakrids, krydderurter og vanilje.',
                    'Barolo fra Corsini marken er altid udsøgt og er blevet en yderst eftertragtet vin i vores sortiment. Alle årgange er fantastiske og 2010 årgangen er  nok den bedste årgang siden 1996, den har et imponerende potentiale allerede.'],
                    type: "Red",
                    renderMethod: "wineFour",
        },
        {
            name: "PINOT GRIGIO, PETER ZEMMER",
            detail: ['Denne Pinot Grigio er udvalgt fra de bedste vinmarker fra bunden af dalen og langs stejle skråninger i umiddelbar nærhed af vingården.Her trives den under et specielt mikroklima og på optimale jordarter af en stenet, sand -og stærk kalkholdig natur. Det lave udbytte pr. hektar og særlige terroir afspejles i det ekstraordinært høje kvalitetsniveau som denne hvidvin repræsenterer.',
                    'Det fascinerende samspil mellem tradition og innovation, menneske og natur, mening og sensualitet, er bærende elementer der driver vinene fra Peter Zemmers produkter.',
                    'Druerne er forsigtigt presset og den alkoholiske gæring er reguleret ved en temperatur på 18 ° C i tanke af rustfrit stål og efter flere måneders modning er denne vin perfektioneret.',
                    'Vinen leverer en udsøgt aroma der står i flot kontrast til syrligheden, der giver denne populære vin både kraft og struktur. '],
                    type: "White",
                    renderMethod: "wineFive",
        },
        {
            name: "PACHAR TOSCANA IGT",
            detail: ['Helt igennem fantastisk vin til prisen, der baserer sig på 70% Chardonnay, 20% Viognier & 10 % Sauvignon Blanc.',
                    'Førende journalister med kompetencer udi vinbranchen skrev i forbidnelse med Vin-Italy messen at: ”Golden Yellov in colour, intense and elegant in the nose and elegant with evident floral notes of lime-tree, vanilla and hazel nuts. Full bodied with layers of apple and light lemon supported by creamy vanilla and a slight oak flavor with a good mineral finish”.',
                    'En intens og elegant smag med klare anstrøg af lime og vanilie. En vedvarende finish der komplimenterer den lette smag af æble og citron der understøttes af en cremet vaniliesmag og fornemmelsen af eg.',
                    'Helt perfekt sil røget fisk, retter med krebsdyr samt krydret hvidt kød, modnede oste og oste soufflé.', 
                    'En yderst populær og prisvenlig hvidvin fra vores sortiment. '],
                    type: "White",
                    renderMethod: "wineSix",
        },
        {
            name: "ARGAMAKOW LANGHE PINOT NERO",
            detail: ['En fantastisk vin produceret i Monforte d’Alba, fremstillet af 100% Pinot Noir druer og er endnu en af vore eksklusive vine med en gennemsnitligt produktion på omkring 2000 flasker.',
                    'Om produktionsforholdene skriver producenten:” Vinification starts after a manual harvest in crates, with immediate stalk removal. Next, four pump overs are carried out each day for the first week, and the maceration lasts eight days. After the racking, decantering and the malolactic fermentation have occurred, the wine is then aged in different aged French barriques for sixteen months.”',
                    'En vin der kan drikkes ung og som sagtens kan holde til en anbefalet modning mellem 10-15 år.',
                    'En blød og behagelig vin der bør serveres mellem 16-18 grader, god tannin, velduftende og helt ideel til pasta og risretter, fisk og lyst kød.'],
                    type: "Red",
                    renderMethod: "wineSeven",
        },
    ];

    @action
    public setRender = (type : string) : void => {
        this.renderMethod = type;
    }

    @action
    public getRender = () : string => {
        return this.renderMethod;
    }
    @action
    public loadData() {
		fetch('https://gracious-knuth-1a58ef.netlify.com/.netlify/functions/server/wines')
			.then(response => response.json())
			.then(data => {
				console.log(data)
		})
			.catch(err => console.error("", err.toString()))
	}
    
}

const mainStore = new MainStore;

export default mainStore;
