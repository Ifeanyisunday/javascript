for(let i = 1; i < 13; i++){
	let space = ""
	for(let j = 1; j < 13; j++){
		space += `${i} x ${j} = ${i * j}\t`
	}
	console.log(space)
}