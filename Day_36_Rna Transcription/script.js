// transcription('GCT') should return 'CGA'
// transcription('GATC') should return 'CUAG'



const transcription = (dna) => {
    let rna = dna.split('');

    for (let i = 0; i < rna.length; i++) {
        switch (dna[i]) {
            case "G":
                rna[i] = "C";
                break;
            case "C":
                rna[i] = "G";
                break;
            case "T":
                rna[i] = "A";
                break;
            case "A":
                rna[i] = "U";
                break;
            default:
                rna[i] = "";
        }
    }

    return rna.join('');
};


console.log(transcription('GATC'));