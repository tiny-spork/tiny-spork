// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory (specNum, dna) {
  const newSpecies = {
  specimenNum: specNum,
  dna: dna,
  mutate() {
    const randStrand = Math.floor(Math.random()*15);

    
  }
}; return newSpecies
}

const randStrand1 = Math.floor(Math.random()*15);
console.log(randStrand1)







