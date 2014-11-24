// JavaScript Document

function flip(cha,product)
{
	cha = cha.toUpperCase();
	switch(cha)
	{
		case "C":
			return "G";
			break;
		case "G":
			return "C";
			break;
		case "A":
			if(product == "DNA")
			{
				return "T";
			}
			else
			{
				return "U";
			}
			break;
		case "T":
		case "U":
			return "A";
			break;
		default:
			return "";
		
	}
}

function flipStrand(strand,type)
{
	var res = ""
	for(var i= 0;i<strand.length;i++)
	{
		res += flip(strand[i],type);
	}
	return res
}


function isDNA(dna)
{
	dna = dna.toUpperCase();
	if(dna.length <= 1)
	{
		return dna.match(/[ATCG]/);	
	}
	else
	{
		for(var i = 0;i<dna.length;i++)
		{
			if(isDNA(dna[i]))
			{
				
			}
			else
			{
				return false;
			}
			
		}
		return true;
	}
	 	
}

function isRNA(rna)
{
	rna = rna.toUpperCase();
	if(rna.length <= 1)
	{
		return rna.match(/[AUCG]/);	
	}
	else
	{
		for(var i = 0;i<rna.length;i++)
		{
			if(isRNA(rna[i]))
			{
				
			}
			else
			{
				return false;
			}
			
		}
		return true;
	}
	
}

function randomDNA(length)
{
	var res = ""
	var src = "ATCG";
	var end = ["ATT","ATC","ACT"];
	for(var i = 0; i < length;i++)
	{
		res += 	src[Math.floor(Math.random()*4)]
	}
	res = res.split("ATT").join("CTA");
	res = res.split("ATC").join("CTT");
	res = res.split("ACT").join("CAA");
	if(length>6)
	{
		res = res.slice(6)
		res = "TAC"+res+end[Math.floor(Math.random()*3)];
	}
	
	
	return res;
}
function randomRNA(length)
{
	var dna = randomDNA(length);
	return transcribe(dna);
}

function transcribe(dna)
{
	if(isDNA(dna))
	{
		
		return flipStrand(dna,"RNA");
	}
	else
	{
		return false;
	}
}

function toAmino(triplet)
{
	if(triplet.length == 3)
	{
		triplet = triplet.toUpperCase();
		switch(triplet)
		{
			case "UUU":
			case "UUC":
				return "Phe";
				break;
			case "UUA":
			case "UUG":
			case "CUU":
			case "CUC":
			case "CUA":
			case "CUG":
				return "Leu";
				break;
			case "AUU":
			case "AUC":
			case "AUA":	
				return "Ile";
				break;
			case "AUG":
				return "Met";
				break;
			case "GUU":
			case "GUC":
			case "GUA":
			case "GUG":
				return "Val"
				break;
			case "UCU":
			case "UCC":
			case "UCA":
			case "UCG":
			case "AGU":
			case "AGC":
				return "Ser";
				break;
			case "CCU":
			case "CCC":
			case "CCA":
			case "CCG":
				return "Pro";
				break;
			case "ACU":
			case "ACC":
			case "ACA":
			case "ACG":
				return "Thr";
				break;
			case "GCU":
			case "GCC":
			case "GCA":
			case "GCG":
				return "Ala";
				break;
			case "UAU":
			case "UAC":
				return "Tyr";
				break;
			case "UAA":
			case "UAG":
			case "UGA":
				return "Stop";
				break;
			case "CAU":
			case "CAC":
				return "His";
				break;
			case "CAA":
			case "CAG":
				return "Gla";
				break;
			case "AAU":
			case "AAC":
				return "Asn";
				break;
			case "AAA":
			case "AAG":
				return "Lys";
				break;
			case "GAU":
			case "GAC":
				return "Asp";
				break;
			case "GAA":
			case "GAG":
				return "Glu";
				break;
			case "UGU":
			case "UGC":
				return "Cys";
				break;
			case "UGG":
				return "Trp";
				break;
			case "CGU":
			case "CGC":
			case "CGA":
			case "CGG":
			case "AGA":
			case "AGG":
				return "Arg";
				break;
			case "GGU":
			case "GGC":
			case "GGA":
			case "GGG":
				return "Gly";
				break;		
		}
	}
	else
	{
		return false;
	}
}

function colorizeDNA(dna)
{
	var ret = ""
	for(var i = 0;i<dna.length;i++)
	{
		switch(dna[i])
		{
			case "T":
				ret+="<span id='dna_t'>T</span>"
				break;
			case "U":
				ret+="<span id='dna_u'>U</span>"
				break;	
			case "A":
				ret+="<span id='dna_a'>A</span>"
				break;	
			case "C":
				ret+="<span id='dna_c'>C</span>"
				break;
			case "G":
				ret+="<span id='dna_g'>G</span>"
				break;	
			default:
				ret+=dna[i];
			
		}
	}
	return ret;
}

function amino_Info(amino)
{
	var ret= [];
	var aminos = amino.split("-")
	for(var i = 0; i < aminos.length;i++)
	{
		switch(aminos[i])
		{
			case "Phe":
				ret[i] = "<span class='aminoacid' id='phe_am'>Phe</span>";
				break;
			case "Leu":
				ret[i] = "<span class='aminoacid' id='leu_am'>Leu</span>";
				break;
			case "Ile":
				ret[i] = "<span class='aminoacid' id='ile_am'>Ile</span>";
				break;
			case "Met":
				ret[i] = "<span class='aminoacid' id='met_am'>Met</span>";
				break;
			case "Val":
				ret[i] = "<span class='aminoacid' id='val_am'>Val</span>";
				break;
			case "Ser":
				ret[i] = "<span class='aminoacid' id='ser_am'>Ser</span>";
				break;
			case "Pro":
				ret[i] = "<span class='aminoacid' id='pro_am'>Pro</span>";
				break;
			case "Thr":
				ret[i] = "<span class='aminoacid' id='thr_am'>Thr</span>";
				break;
			case "Ala":
				ret[i] = "<span class='aminoacid' id='ala_am'>Ala</span>";
				break;
			case "Tyr":
				ret[i] = "<span class='aminoacid' id='tyr_am'>Tyr</span>";
				break;
			case "His":
				ret[i] = "<span class='aminoacid' id='his_am'>His</span>";
				break;
			case "Gla":
				ret[i] = "<span class='aminoacid' id='gla_am'>Gla</span>";
				break;
			case "Asn":
				ret[i] = "<span class='aminoacid' id='asn_am'>Asn</span>";
				break;
			case "Lys":
				ret[i] = "<span class='aminoacid' id='lys_am'>Lys</span>";
				break;
			case "Asp":
				ret[i] = "<span class='aminoacid' id='asp_am'>Asp</span>";
				break;
			case "Glu":
				ret[i] = "<span class='aminoacid' id='glu_am'>Glu</span>";
				break;
			case "Cys":
				ret[i] = "<span class='aminoacid' id='cys_am'>Cys</span>";
				break;
			case "Trp":
				ret[i] = "<span class='aminoacid' id='trp_am'>Trp</span>";
				break;
			case "Arg":
				ret[i] = "<span class='aminoacid' id='arg_am'>Arg</span>";
				break;
			case "Gly":
				ret[i] = "<span class='aminoacid' id='gly_am'>Gly</span>";
				break;
			case "Stop":
				ret[i] = "<span class='aminoacid' id='stop_am'>Stop</span>";
				break;
			default:
					ret[i] = aminos[i];
					
		}
	}
	return ret.join("-");
}



function RNAtoAmino(strand)
{
	if(isRNA(strand))
	{
		var i = 0;
		var aminos = []
		while(i < strand.length-2)
		{
			aminos[i/3] = toAmino(strand[i]+strand[i+1]+strand[i+2]);
			i += 3
		}
		return aminos;
	}
	else
	{
		return false;
	}
}


function button_randomDNA()
{
	var dna = randomDNA(60);
	$("#inputDNA").val(dna)
	analyze()
}

function analyze()
{
	var dna_left = $("#inputDNA").val().toUpperCase();
	var dna_right = flipStrand(dna_left,"DNA");
	
	var rna_left = transcribe(dna_left);
	var rna_right = flipStrand(rna_left,"RNA");
	
	var amino = RNAtoAmino(rna_left).join("-");
	
	$("#dna_left").html(colorizeDNA(dna_left))
	$("#dna_right").html(colorizeDNA(dna_right))
	$("#rna_left").html(colorizeDNA(rna_left))
	$("#rna_right").html(colorizeDNA(rna_right))
	$("#amino").html(amino_Info(amino))
	$(".aminoacid").on("click",function()
		{

			$(this).html()
		
		});
}

$(document).ready(function(){
	$("#rnadomDNAButton").on("click",function(){button_randomDNA();console.log("click")})
	$("#analyze").on("click",function()
	{
		analyze();
	})
	
});