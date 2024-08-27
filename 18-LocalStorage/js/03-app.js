    //
    // const meses = [ 'Enero','Febrer','Marzo'];
    //
    // const mesesString = JSON.stringify(meses);
    //
    // localStorage.setItem('meses', mesesString);

    //Actualizar un registro

    const mesesArray = JSON.parse(localStorage.getItem('meses'));
    console.log(mesesArray);

    mesesArray.push('JULIO');

    console.log(mesesArray);

    localStorage.setItem('meses', JSON.stringify(mesesArray));


    //localStorage.clear();
