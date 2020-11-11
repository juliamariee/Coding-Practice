def DNA_strand(dna):
    comp = ''
    for i in range(0, len(dna)):
        if(dna[i] == 'A'):
            comp += 'T'
        if(dna[i] == 'T'):
            comp += 'A'
        if(dna[i] == 'C'):
            comp += 'G'
        if(dna[i] == 'G'):
            comp += 'C'
    return comp