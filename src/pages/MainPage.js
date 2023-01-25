import "./MainPage.css";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const MainPage = () => {
  const [returnedData, setReturnedData] = useState();
  const [AngajatID, setAngajatID] = useState();
  const [AngajatNume, setAngajatNume] = useState();
  const [AngajatPrenume, setAngajatPrenume] = useState();
  const [AngajatVarsta, setAngajatVarsta] = useState();
  const [AngajatSex, setAngajatSex] = useState();
  const [deleteClass, setDeleteClass] = useState("notAllowed");
  const [editClass, setEditClass] = useState("notAllowed");
  const [editButtonClass, setEditButtonClass] = useState("notAllowed");
  const [dataCopy, setDataCopy] = useState({});
  const [pret, setPret] = useState();

  const [returnedDataCar, setReturnedDataCar] = useState();
  const [MasinaID, setMasinaID] = useState();
  const [CategorieID, setCategorieID] = useState();
  const [Marca, setMarca] = useState();
  const [AnFabricatie, setAnFabricatie] = useState();
  const [Culoare, setCuloare] = useState();
  const [TipCombustibil, setTipCombustibil] = useState();
  const [Motorizare, setMotorizare] = useState();
  const [editClassCar, setEditClassCar] = useState("notAllowed");
  const [editButtonClassCar, setEditButtonClassCar] = useState("notAllowed");
  const [dataCopyCar, setDataCopyCar] = useState({});
  const [deleteClassCar, setDeleteClassCar] = useState("notAllowed");
  const [pretm, setPretm] = useState();

  const [marcaJoin, setMarcaJoin] = useState();
  const [anFabricatieJoin, setAnFabricatieJoin] = useState();
  const [returnedDataCateg, setReturnedDataCateg] = useState();

  const [marcaPret, setMarcaPret] = useState();
  const [anFabricatiePret, setAnFabricatiePret] = useState();
  const [returnedDataPret, setReturnedDataPret] = useState();

  const [numeFactura, setNumeFactura] = useState();
  const [prenumeFactura, setPrenumeFactura] = useState();
  const [returnedDataFactura, setReturnedDataFactura] = useState();

  const [marcaCateg, setMarcaCateg] = useState();
  const [anFabricatieCateg, setAnFabricatieCateg] = useState();
  const [motorizareCateg, setMotorizareCateg] = useState();
  const [returnedDataCateg2, setReturnedDataCateg2] = useState();

  const [numeAn, setNumeAn] = useState();
  const [prenumeAn, setPrenumeAn] = useState();
  const [returnedAnJoin, setReturnedAnJoin] = useState();

  const [marcaFiab, setMarcaFiab] = useState();
  const [motorizareFiab, setMotorizareFiab] = useState();
  const [returnedDataFiab, setReturnedDataFiab] = useState();

  const [returnedDataNumber, setReturnedDataNumber] = useState();
  const [number, setNumber] = useState(0);

  const [returnedDataMarcaPret, setReturnedDataMarcaPret] = useState();
  const [numberMarPre, setNumberMarPre] = useState(0);

  const [numberVandut, setNumberVandut] = useState(0);
  const [returnedDataVandut, setReturnedDataVandut] = useState();
  const [pretVandute, setPretVandute] = useState();

  const [returnedDataFiabilitate, setReturnedDataFiabilitate] = useState();
  const [fiabAn, setFiabAn] = useState(0);

  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);

  const [statsOn, setStatsOn] = useState(false);

  const [returnedAngId, setReturnedAngId] = useState();
  const [returnedCarId, setReturnedCarId] = useState();
  const [render, setRender] = useState(false);
  const [renderCar, setRenderCar] = useState(false);

  const columns = [
    { field: "Nume", headerName: "Nume", width: 130 },
    { field: "Prenume", headerName: "Prenume", width: 130 },
    { field: "Sex", headerName: "Sex", width: 70 },
    {
      field: "Delete",
      headerName: "Delete",
      width: 80,
      renderCell: () => {
        return (
          <DeleteIcon
            className={`${deleteClass}`}
            onClick={deleteFieldHandler}
          />
        );
      },
    },
    {
      field: "Edit",
      headerName: "Edit",
      width: 60,
      renderCell: (cellValues) => {
        return (
          <EditIcon className={`${editClass}`} onClick={editDataHandler} />
        );
      },
    },
  ];
  const columnsCar = [
    { field: "Marca", headerName: "Marca", width: 90 },
    { field: "AnFabricatie", headerName: "AnFabricatie", width: 130 },
    { field: "TipCombustibil", headerName: "TipCombustibil", width: 120 },
    { field: "Motorizare", headerName: "Motorizare", width: 90 },
    { field: "Pret", headerName: "Pret", width: 80 },
    {
      field: "Delete",
      headerName: "Delete",
      width: 80,
      renderCell: () => {
        return (
          <DeleteIcon
            className={`${deleteClassCar}`}
            onClick={deleteCarFieldHandler}
          />
        );
      },
    },
    {
      field: "Edit",
      headerName: "Edit",
      width: 60,
      renderCell: (cellValues) => {
        return (
          <EditIcon
            className={`${editClassCar}`}
            onClick={editCarDataHandler}
          />
        );
      },
    },
  ];

  const columnsJoinCateg = [
    { field: "Marca", headerName: "Marca", width: 60 },
    { field: "Caroserie", headerName: "Caroserie", width: 80 },
    { field: "AnFabricatie", headerName: "AnFabricatie", width: 100 },
  ];

  const columnsJoinPret = [
    { field: "Marca", headerName: "Marca", width: 60 },
    { field: "AnFabricatie", headerName: "AnFabricatie", width: 100 },
    { field: "PretDeVanzare", headerName: "PretDeVanzare", width: 120 },
    { field: "Autonomie", headerName: "Autonomie", width: 80 },
  ];

  const columnsFacturaJoin = [
    { field: "IDFactura", headerName: "IDFactura", width: 80 },
    { field: "SumaAchitata", headerName: "SumaAchitata", width: 100 },
    { field: "DataAchitarii", headerName: "DataAchitarii", width: 100 },
  ];

  const columnsJoinCateg2 = [
    { field: "TipCaroserie", headerName: "TipCaroserie", width: 120 },
    {
      field: "NumarMasiniDisponibile",
      headerName: "NumarMasiniDisponibile",
      width: 180,
    },
  ];

  const columnsAn = [
    { field: "Nume", headerName: "Nume", width: 60 },
    { field: "Prenume", headerName: "Prenume", width: 80 },
    { field: "Varsta", headerName: "Varsta", width: 60 },
    { field: "Sex", headerName: "Sex", width: 40 },
  ];

  const columnsFiab = [
    { field: "Marca", headerName: "Marca", width: 60 },
    { field: "GradFiabilitate", headerName: "GradFiabilitate", width: 120 },
  ];

  let NumeAngajat = "";
  let AngajatId = "";
  let PrenumeAngajat = "";
  let SexAngajat = "";
  let VarstaAngajat = "";

  if (returnedData != undefined) {
    if (returnedData.Nume !== undefined) {
      NumeAngajat = returnedData.Nume;
    }

    if (returnedData.Prenume !== undefined) {
      PrenumeAngajat = returnedData.Prenume;
    }

    if (returnedData.AngajatID !== undefined) {
      AngajatId = returnedData.AngajatID;
    }

    if (returnedData.Sex !== undefined) {
      SexAngajat = returnedData.Sex;
    }

    if (returnedData.Varsta !== undefined) {
      VarstaAngajat = returnedData.Varsta;
    }
  }

  let M = "";
  let AnFab = "";
  let Comb = "";
  let Motor = "";
  let PretM = "";

  if (returnedDataCar != undefined) {
    if (returnedDataCar.Marca !== undefined) {
      M = returnedDataCar.Marca;
    }

    if (returnedDataCar.AnFabricatie !== undefined) {
      AnFab = returnedDataCar.AnFabricatie;
    }

    if (returnedDataCar.TipCombustibil !== undefined) {
      Comb = returnedDataCar.TipCombustibil;
    }

    if (returnedDataCar.Motorizare !== undefined) {
      Motor = returnedDataCar.Motorizare;
    }
    if (returnedDataCar.Pret !== undefined) {
      PretM = returnedDataCar.Pret;
    }
  }

  const rows = [
    {
      id: 1,
      Nume: `${NumeAngajat}`,
      Prenume: `${PrenumeAngajat}`,
      Sex: `${SexAngajat}`,
      // Varsta: `${VarstaAngajat}`,
    },
  ];

  const rowsCar = [
    {
      id: 1,
      Marca: `${M}`,
      AnFabricatie: `${AnFab}`,
      TipCombustibil: `${Comb}`,
      Motorizare: `${Motor}`,
      Pret: `${PretM}`,
      // Varsta: `${VarstaAngajat}`,
    },
  ];

  let MarcaJ = "";
  let Caros = "";
  let AnFabJoin = "";

  if (returnedDataCateg !== undefined) {
    if (returnedDataCateg.Marca !== undefined) {
      MarcaJ = returnedDataCateg.Marca;
    }
    if (returnedDataCateg.AnFabricatie !== undefined) {
      AnFabJoin = returnedDataCateg.AnFabricatie;
    }
    if (returnedDataCateg.TipCaroserie !== undefined) {
      Caros = returnedDataCateg.TipCaroserie;
    }
  }

  const rowsCategJoin = [
    {
      id: 1,
      Marca: `${MarcaJ}`,
      Caroserie: `${Caros}`,
      AnFabricatie: `${AnFabJoin}`,
    },
  ];

  let MarcaP = "";
  let AnFabJoinP = "";
  let PretP = "";
  let autonom = "";

  if (returnedDataPret !== undefined) {
    if (returnedDataPret.Marca !== undefined) {
      MarcaP = returnedDataPret.Marca;
    }
    if (returnedDataPret.AnFabricatie !== undefined) {
      AnFabJoinP = returnedDataPret.AnFabricatie;
    }
    if (returnedDataPret.PretDeVanzare !== undefined) {
      PretP = returnedDataPret.PretDeVanzare;
    }
    if (returnedDataPret.Autonomie !== undefined) {
      autonom = returnedDataPret.Autonomie;
    }
  }

  const rowsPretJoin = [
    {
      id: 1,
      Marca: `${MarcaP}`,
      AnFabricatie: `${AnFabJoinP}`,
      PretDeVanzare: `${PretP}`,
      Autonomie: `${autonom}`,
    },
  ];

  let IdF = "";
  let SumaA = "";
  let DataA = "";

  if (returnedDataFactura !== undefined) {
    if (returnedDataFactura.IDFactura !== undefined) {
      IdF = returnedDataFactura.IDFactura;
    }
    if (returnedDataFactura.SumaAchitata !== undefined) {
      SumaA = returnedDataFactura.SumaAchitata;
    }
    if (returnedDataFactura.DataAchitarii !== undefined) {
      DataA = returnedDataFactura.DataAchitarii;
    }
  }

  const rowsFacturaJoin = [
    {
      id: 1,
      IDFactura: `${IdF}`,
      SumaAchitata: `${SumaA}`,
      DataAchitarii: `${DataA}`,
    },
  ];

  let caro = "";
  let nrm = "";

  if (returnedDataCateg2 !== undefined) {
    if (returnedDataCateg2.TipCaroserie !== undefined) {
      caro = returnedDataCateg2.TipCaroserie;
    }
    if (returnedDataCateg2.NumarMasiniDisponibile !== undefined) {
      nrm = returnedDataCateg2.NumarMasiniDisponibile;
    }
  }

  const rowsCategJoin2 = [
    {
      id: 1,
      TipCaroserie: `${caro}`,
      NumarMasiniDisponibile: `${nrm}`,
    },
  ];

  let numeA = "";
  let prenumeA = "";
  let varstaA = "";
  let sexA = "";

  if (returnedAnJoin !== undefined) {
    if (returnedAnJoin.Nume !== undefined) {
      numeA = returnedAnJoin.Nume;
    }
    if (returnedAnJoin.Prenume !== undefined) {
      prenumeA = returnedAnJoin.Prenume;
    }
    if (returnedAnJoin.Varsta !== undefined) {
      varstaA = returnedAnJoin.Varsta;
    }
    if (returnedAnJoin.Sex !== undefined) {
      sexA = returnedAnJoin.Sex;
    }
  }

  const rowsAn = [
    {
      id: 1,
      Nume: `${numeA}`,
      Prenume: `${prenumeA}`,
      Varsta: `${varstaA}`,
      Sex: `${sexA}`,
    },
  ];

  let marcaF = "";
  let gfiab = "";

  if (returnedDataFiab !== undefined) {
    if (returnedDataFiab.Marca !== undefined) {
      marcaF = returnedDataFiab.Marca;
    }
    if (returnedDataFiab.GradFiabilitate !== undefined) {
      gfiab = returnedDataFiab.GradFiabilitate;
    }
  }

  const rowsFiab = [
    {
      id: 1,
      Marca: `${marcaF}`,
      GradFiabilitate: `${gfiab}`,
    },
  ];

  const idHandler = (e) => {
    let value = parseInt(e.target.value);
    setAngajatID(value);
  };

  const numeHandler = (e) => {
    setAngajatNume(e.target.value);
  };

  const prenumeHandler = (e) => {
    setAngajatPrenume(e.target.value);
  };

  const varstaHandler = (e) => {
    let value = parseInt(e.target.value);
    setAngajatVarsta(value);
  };

  const sexHandler = (e) => {
    setAngajatSex(e.target.value);
  };

  const masinaIdHandler = (e) => {
    let value = parseInt(e.target.value);
    setMasinaID(value);
  };
  const categorieIdHandler = (e) => {
    let value = parseInt(e.target.value);
    setCategorieID(value);
  };
  const marcaHandler = (e) => {
    setMarca(e.target.value);
  };
  const anFabricatieHandler = (e) => {
    let value = parseInt(e.target.value);
    setAnFabricatie(value);
  };
  const culoareHandler = (e) => {
    setCuloare(e.target.value);
  };
  const tipCombustibilHandler = (e) => {
    setTipCombustibil(e.target.value);
  };
  const motorizareHandler = (e) => {
    setMotorizare(e.target.value);
  };

  const getData = async () => {
    setDeleteClass("deleteIcon");
    setEditClass("editIcon");
    const newData = await fetch("/api", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: AngajatNume,
      }),
    }).then((res) => res.json());
    setReturnedData(newData[0]);
  };

  const createAngajat = async () => {
    const newData = await fetch("/hello", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        AngajatID: AngajatID,
        Nume: AngajatNume,
        Prenume: AngajatPrenume,
        Varsta: AngajatVarsta,
        Sex: AngajatSex,
      }),
    }).then((res) => res.json());
    setReturnedData(newData[0]);
  };

  const deleteFieldHandler = async () => {
    const deletedData = await fetch("/delete", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Nume: returnedData.Nume,
        Prenume: returnedData.Prenume,
      }),
    });
    setReturnedData({});
  };

  const deleteCarFieldHandler = async () => {
    const deletedData = await fetch("/deletecar", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Marca: returnedDataCar.Marca,
        MasinaID: returnedDataCar.IDMasina,
      }),
    });
    setReturnedDataCar({});
  };

  const pretHandler = (e) => {
    setPretm(e.target.value);
  };

  const editDataHandler = () => {
    setEditButtonClass("editIcon");
    setDataCopy(returnedData);
  };

  const editCarDataHandler = () => {
    setEditButtonClassCar("editIcon");
    setDataCopyCar(returnedDataCar);
  };

  const editData = async () => {
    let toSendObj = {};
    console.log(toSendObj);
    if (dataCopy.AngajatID !== AngajatID && AngajatID !== undefined) {
      toSendObj.AngajatID = AngajatID;
    } else {
      toSendObj.AngajatID = dataCopy.AngajatID;
    }
    if (dataCopy.Nume !== AngajatNume && AngajatNume !== undefined) {
      toSendObj.Nume = AngajatNume;
    } else {
      console.log("intra");
      toSendObj.Nume = dataCopy.Nume;
    }
    if (dataCopy.Prenume !== AngajatPrenume && AngajatPrenume !== undefined) {
      toSendObj.Prenume = AngajatPrenume;
    } else {
      toSendObj.Prenume = dataCopy.Prenume;
    }
    if (dataCopy.Varsta !== AngajatVarsta && AngajatVarsta !== undefined) {
      toSendObj.Varsta = AngajatVarsta;
    } else {
      toSendObj.Varsta = dataCopy.Varsta;
    }
    if (dataCopy.Sex !== AngajatSex && AngajatSex !== undefined) {
      toSendObj.Sex = AngajatSex;
    } else {
      toSendObj.Sex = dataCopy.Sex;
    }
    const editData = await fetch("/edit", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ID: toSendObj.AngajatID,
        Nume: toSendObj.Nume,
        Prenume: toSendObj.Prenume,
        Varsta: toSendObj.Varsta,
        Sex: toSendObj.Sex,
        IDc: returnedData.AngajatID,
      }),
    });
  };

  const editCarData = async () => {
    let toSendObj = {};
    if (dataCopyCar.MasinaID !== MasinaID && MasinaID !== undefined) {
      toSendObj.MasinaID = MasinaID;
    } else {
      toSendObj.MasinaID = dataCopyCar.IDMasina;
    }
    if (dataCopyCar.CategorieID !== CategorieID && CategorieID !== undefined) {
      toSendObj.CategorieID = CategorieID;
    } else {
      toSendObj.CategorieID = dataCopyCar.IDCategorie;
    }
    if (dataCopyCar.Marca !== Marca && Marca !== undefined) {
      toSendObj.Marca = Marca;
    } else {
      toSendObj.Marca = dataCopyCar.Marca;
    }
    if (
      dataCopyCar.AnFabricatie !== AnFabricatie &&
      AnFabricatie !== undefined
    ) {
      toSendObj.AnFabricatie = AnFabricatie;
    } else {
      toSendObj.AnFabricatie = dataCopyCar.AnFabricatie;
    }
    if (dataCopyCar.Culoare !== Culoare && Culoare !== undefined) {
      toSendObj.Culoare = Culoare;
    } else {
      toSendObj.Culoare = dataCopyCar.Culoare;
    }

    if (
      dataCopyCar.TipCombustibil !== TipCombustibil &&
      TipCombustibil !== undefined
    ) {
      toSendObj.TipCombustibil = TipCombustibil;
    } else {
      toSendObj.TipCombustibil = dataCopyCar.TipCombustibil;
    }

    if (dataCopyCar.Motorizare !== Motorizare && Motorizare !== undefined) {
      toSendObj.Motorizare = Motorizare;
    } else {
      toSendObj.Motorizare = dataCopyCar.Motorizare;
    }

    if (dataCopyCar.Pret !== pretm && pretm !== undefined) {
      toSendObj.Pret = pretm;
    } else {
      toSendObj.Pret = dataCopyCar.Pret;
    }

    const editData = await fetch("/editcar", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        MasinaID: toSendObj.MasinaID,
        CategorieID: toSendObj.CategorieID,
        Marca: toSendObj.Marca,
        AnFabricatie: toSendObj.AnFabricatie,
        Culoare: toSendObj.Culoare,
        TipCombustibil: toSendObj.TipCombustibil,
        Motorizare: toSendObj.Motorizare,
        Pret: toSendObj.Pret,
        IDc: dataCopyCar.IDMasina,
      }),
    });
    console.log(toSendObj);

    setReturnedDataCar({});
  };

  const getCarData = async () => {
    setDeleteClassCar("deleteIcon");
    setEditClassCar("editIcon");
    const newData = await fetch("/carget", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Marca: Marca,
      }),
    }).then((res) => res.json());
    setReturnedDataCar(newData[0]);
  };

  const getAngId = async () => {
    setRender(true);
    const newData = await fetch("/angid ", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({}),
    }).then((res) => res.json());
    setReturnedAngId(newData);
  };
  if (render === false) {
    getAngId();
  }
  const getCarId = async () => {
    setRenderCar(true);
    const newData = await fetch("/carid ", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({}),
    }).then((res) => res.json());
    setReturnedCarId(newData);
  };
  if (renderCar === false) {
    getCarId();
  }
  let carArr = [" "];
  let angArr = [" "];

  for (const key in returnedCarId) {
    carArr.push(returnedCarId[key].IDMasina);
    carArr.push(",");
  }
  carArr.pop();

  for (const key in returnedAngId) {
    angArr.push(returnedAngId[key].AngajatID);
    angArr.push(",");
  }
  angArr.pop();

  const createCar = async () => {
    const newData = await fetch("/carcreate", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        MasinaID: MasinaID,
        CategorieID: CategorieID,
        Marca: Marca,
        AnFabricatie: AnFabricatie,
        Culoare: Culoare,
        TipCombustibil: TipCombustibil,
        Motorizare: Motorizare,
        Pret: pretm,
      }),
    }).then((res) => res.json());
    console.log(newData[0]);
    setReturnedDataCar(newData[0]);
  };

  const marcaJoinHandler = (e) => {
    setMarcaJoin(e.target.value);
  };

  const anFabricatieJoinHandler = (e) => {
    let value = parseInt(e.target.value);
    setAnFabricatieJoin(value);
  };

  const getCateg = async () => {
    const newData = await fetch("/getcateg", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        AnFabricatie: anFabricatieJoin,
        Marca: marcaJoin,
      }),
    }).then((res) => res.json());
    setReturnedDataCateg(newData[0]);
  };

  const marcaPretHandler = (e) => {
    setMarcaPret(e.target.value);
  };

  const anFabricatiePretHandler = (e) => {
    let value = parseInt(e.target.value);
    setAnFabricatiePret(value);
  };

  const getPret = async () => {
    const newData = await fetch("/getpret", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        AnFabricatie: anFabricatiePret,
        Marca: marcaPret,
      }),
    }).then((res) => res.json());
    setReturnedDataPret(newData[0]);
  };

  const numeFacturaHandler = (e) => {
    setNumeFactura(e.target.value);
  };

  const prenumeFacturaHandler = (e) => {
    setPrenumeFactura(e.target.value);
  };

  const getFactura = async () => {
    const newData = await fetch("/getfactura", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Nume: numeFactura,
        Prenume: prenumeFactura,
      }),
    }).then((res) => res.json());
    setReturnedDataFactura(newData[0]);
  };

  const marcaCategHandler = (e) => {
    setMarcaCateg(e.target.value);
  };

  const anFabricatieCategHandler = (e) => {
    setAnFabricatieCateg(e.target.value);
  };

  const motorizareCategHandler = (e) => {
    setMotorizareCateg(e.target.value);
  };

  const getCateg2 = async () => {
    const newData = await fetch("/getcateg2", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        AnFabricatie: anFabricatieCateg,
        Marca: marcaCateg,
        Motorizare: motorizareCateg,
      }),
    }).then((res) => res.json());
    setReturnedDataCateg2(newData[0]);
  };

  const numeAnHandler = (e) => {
    setNumeAn(e.target.value);
  };
  const prenumeAnHandler = (e) => {
    setPrenumeAn(e.target.value);
  };

  const getAn = async () => {
    const newData = await fetch("/getan", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Nume: numeAn,
        Prenume: prenumeAn,
      }),
    }).then((res) => res.json());
    setReturnedAnJoin(newData[0]);
  };

  const marcaFiabHandler = (e) => {
    setMarcaFiab(e.target.value);
  };

  const motorizareFiabHandler = (e) => {
    setMotorizareFiab(e.target.value);
  };

  const getFiab = async () => {
    const newData = await fetch("/getfiab", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Marca: marcaFiab,
        Motorizare: motorizareFiab,
      }),
    }).then((res) => res.json());
    setReturnedDataFiab(newData[0]);
  };

  const getNumber = async () => {
    const newData = await fetch("/getnumber", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({}),
    }).then((res) => res.json());
    setReturnedDataNumber(newData[0]);
    setNumber(1);
  };

  const getMarcaPret = async () => {
    const newData = await fetch("/getmarcap", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({}),
    }).then((res) => res.json());
    setReturnedDataMarcaPret(newData[0]);
    setNumberMarPre(1);
  };

  const pretVanduteHandler = (e) => {
    setPretVandute(e.target.value);
  };

  const getNrVa = async () => {
    const newData = await fetch("/getpretvandute", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Pret: pretVandute,
      }),
    }).then((res) => res.json());
    setReturnedDataVandut(newData[0]);
    setNumberVandut(1);
  };

  const getFiabAn = async () => {
    const newData = await fetch("/getfiaban", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({}),
    }).then((res) => res.json());
    setReturnedDataFiabilitate(newData[0]);
    setFiabAn(1);
  };

  const setDisplayHandler1 = () => {
    setDisplay1(true);
  };
  const setDisplayHandler2 = () => {
    setDisplay2(true);
  };

  const setDisplay2Back = () => {
    setDisplay2(false);
  };

  const setDisplay1Back = () => {
    setDisplay1(false);
  };

  const statsHandlerOn = () => {
    setStatsOn(true);
  };

  const statsHandlerOff = () => {
    setStatsOn(false);
  };
  return (
    <div className="appBox">
      <p>Masina ID (utilizate):{carArr}</p>
      <p>Angajat ID (utilizate):{angArr}</p>
      <p>
        Caroserie clasificare dupa ID: 1-{">"}Sedan,2-{">"}Break,3-{">"}
        HatchBreak
      </p>

      <div className="tablesBox">
        <div className="fcontainer">
          <div className="inputContainer">
            <TextField
              label={"AngajatID"}
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              onChange={idHandler}
              className="idInput"
            />
            <TextField
              label={"Nume"}
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              onChange={numeHandler}
            />
            <TextField
              label={"Prenume"}
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              onChange={prenumeHandler}
            />
            <TextField
              label={"Varsta"}
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              onChange={varstaHandler}
            />
            <TextField
              label={"Sex"}
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              onChange={sexHandler}
            />

            <div className="buttonBox">
              <Button
                onClick={() => {
                  getData();
                }}
              >
                Search
              </Button>
              <Button
                onClick={() => {
                  createAngajat();
                }}
              >
                Insert
              </Button>
              {editButtonClass === "notAllowed" && (
                <Button disabled>Edit</Button>
              )}
              {editButtonClass !== "notAllowed" && (
                <Button onClick={editData}>Edit</Button>
              )}
            </div>
          </div>
          <div className="table">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={2}
              rowsPerPageOptions={[5]}
            />
          </div>
        </div>
        <div className="container">
          <div className="inputContainer">
            <TextField
              label={"MasinaID"}
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              onChange={masinaIdHandler}
              className="idInput"
            />
            <TextField
              label={"CategorieID"}
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              onChange={categorieIdHandler}
            />
            <TextField
              label={"Marca"}
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              onChange={marcaHandler}
            />
            <TextField
              label={"AnFabricatie"}
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              onChange={anFabricatieHandler}
            />
            <TextField
              label={"Culoare"}
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              onChange={culoareHandler}
            />
            <TextField
              label={"TipCombustibil"}
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              onChange={tipCombustibilHandler}
            />
            <TextField
              label={"Motorizare"}
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              onChange={motorizareHandler}
            />
            <TextField
              label={"Pret"}
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              onChange={pretHandler}
            />
            <div className="buttonBox">
              <Button
                onClick={() => {
                  getCarData();
                }}
              >
                Search
              </Button>
              <Button
                onClick={() => {
                  createCar();
                }}
              >
                Insert
              </Button>
              {editButtonClassCar === "notAllowed" && (
                <Button disabled>Edit</Button>
              )}
              {editButtonClassCar !== "notAllowed" && (
                <Button onClick={editCarData}>Edit</Button>
              )}
            </div>
          </div>
          <div className="table">
            <DataGrid
              rows={rowsCar}
              columns={columnsCar}
              pageSize={2}
              rowsPerPageOptions={[5]}
            />
          </div>
        </div>
      </div>
      {display1 == true && (
        <div className="joined">
          <div className="joinBox">
            <div className="joinContainer">
              <div className="inputContainerJoin">
                <p className="firstTextBox">
                  Afla ce tip de caroserie are masina pe care o cauti
                  introducand doar marca si anul acesteia.
                </p>
                <TextField
                  label={"Marca"}
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  onChange={marcaJoinHandler}
                  className="idInput"
                />
                <TextField
                  label={"AnFabricatie"}
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  onChange={anFabricatieJoinHandler}
                  className="idInput"
                />
                <Button className="searchButton" onClick={getCateg}>
                  Search
                </Button>
              </div>
              <div className="tableCateg">
                <DataGrid
                  rows={rowsCategJoin}
                  columns={columnsJoinCateg}
                  pageSize={2}
                  rowsPerPageOptions={[5]}
                />
              </div>
            </div>
            <div className="joinContainer">
              <div className="inputContainerJoin">
                <p className="firstTextBox">
                  Afla cat costa masina pe care ti-o doresti si totodata ce
                  autonomie are aceasta introducand marca si anul de fabricatie.
                </p>
                <TextField
                  label={"Marca"}
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  onChange={marcaPretHandler}
                  className="idInput"
                />
                <TextField
                  label={"AnFabricatie"}
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  onChange={anFabricatiePretHandler}
                  className="idInput"
                />
                <Button className="searchButton" onClick={getPret}>
                  Search
                </Button>
              </div>
              <div className="tableCateg">
                <DataGrid
                  rows={rowsPretJoin}
                  columns={columnsJoinPret}
                  pageSize={2}
                  rowsPerPageOptions={[5]}
                />
              </div>
            </div>
            <div className="joinContainer">
              <div className="inputContainerJoin">
                <p className="firstTextBox">
                  Afla cum arata factura ta,introducand numele si prenumele.
                </p>
                <TextField
                  label={"Nume"}
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  onChange={numeFacturaHandler}
                  className="idInput"
                />
                <TextField
                  label={"Prenume"}
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  onChange={prenumeFacturaHandler}
                  className="idInput"
                />
                <Button className="searchButton" onClick={getFactura}>
                  Search
                </Button>
              </div>
              <div className="tableCateg">
                <DataGrid
                  rows={rowsFacturaJoin}
                  columns={columnsFacturaJoin}
                  pageSize={2}
                  rowsPerPageOptions={[5]}
                />
              </div>
            </div>
          </div>
          {display1 == true && (
            <div className="backMenu">
              <KeyboardDoubleArrowLeftIcon
                className="bMenu"
                onClick={setDisplay1Back}
              />
            </div>
          )}
        </div>
      )}
      {display1 == false && (
        <div className="displayIcon">
          <MenuOpenIcon className="dIcon" onClick={setDisplayHandler1} />
        </div>
      )}
      {display2 == true && (
        <div className="joined">
          <div className="joinBox">
            <div className="joinContainer">
              <div className="inputContainerJoin">
                <p className="firstTextBox">
                  Afla numarul de masini disponibile din acelasi tip de
                  caroserie pe care il are masina dorita introducand marca
                  acesteia,anul de fabricatie si motorizarea.
                </p>
                <TextField
                  label={"Marca"}
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  onChange={marcaCategHandler}
                  className="idInput"
                />
                <TextField
                  label={"AnFabricatie"}
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  onChange={anFabricatieCategHandler}
                  className="idInput"
                />
                <TextField
                  label={"Motorizare"}
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  onChange={motorizareCategHandler}
                  className="idInput"
                />
                <Button className="searchButton" onClick={getCateg2}>
                  Search
                </Button>
              </div>
              <div className="tableCateg">
                <DataGrid
                  rows={rowsCategJoin2}
                  columns={columnsJoinCateg2}
                  pageSize={2}
                  rowsPerPageOptions={[5]}
                />
              </div>
            </div>
            <div className="joinContainer">
              <div className="inputContainerJoin">
                <p className="firstTextBox">
                  Afla informatii despre angajatul ce a ajutat la vanzarea
                  masinii cumparate de catre tine,introducand doar numele si
                  prenumele tau.
                </p>
                <TextField
                  label={"Nume"}
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  onChange={numeAnHandler}
                  className="idInput"
                />
                <TextField
                  label={"Prenume"}
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  onChange={prenumeAnHandler}
                  className="idInput"
                />
                <Button className="searchButton" onClick={getAn}>
                  Search
                </Button>
              </div>
              <div className="tableCateg">
                <DataGrid
                  rows={rowsAn}
                  columns={columnsAn}
                  pageSize={2}
                  rowsPerPageOptions={[5]}
                />
              </div>
            </div>
            <div className="joinContainer">
              <div className="inputContainerJoin">
                <p className="firstTextBox">
                  Afla gradul de fiabilitate al masinii pe care o doresti
                  introducand marca acesteia si tipul de motorizare.
                </p>
                <TextField
                  label={"Marca"}
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  onChange={marcaFiabHandler}
                  className="idInput"
                />
                <TextField
                  label={"Motorizare"}
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  onChange={motorizareFiabHandler}
                  className="idInput"
                />
                <Button className="searchButton" onClick={getFiab}>
                  Search
                </Button>
              </div>
              <div className="tableCategLast">
                <DataGrid
                  rows={rowsFiab}
                  columns={columnsFiab}
                  pageSize={2}
                  rowsPerPageOptions={[5]}
                />
              </div>
            </div>
          </div>
          {display2 == true && (
            <div className="backMenu">
              <KeyboardDoubleArrowLeftIcon
                className="bMenu"
                onClick={setDisplay2Back}
              />
            </div>
          )}
        </div>
      )}
      {display2 == false && (
        <div className="displayIcon">
          <MenuOpenIcon className="dIcon" onClick={setDisplayHandler2} />
        </div>
      )}
      <div className="complexBox">
        {statsOn === false && (
          <p className="statsOn" onClick={statsHandlerOn}>
            Statistici relevante despre sediul nostru.
          </p>
        )}

        {statsOn === true && (
          <p className="statsOn" onClick={statsHandlerOff}>
            Statistici relevante despre sediul nostru.
          </p>
        )}
        {statsOn && (
          <div>
            <div className="iconBox">
              <p>
                Afla ,cu doar o apasare de buton,cate tipuri diferite de
                masini,fabricate dupa 2010, puteti cumpara.
              </p>
              <QuestionMarkIcon className="icon" onClick={getNumber} />
            </div>
            <div className="numberBox">
              {number === 1 && (
                <p className="number">{returnedDataNumber.Numar}</p>
              )}
            </div>
            <div className="iconBox">
              <p>
                Afla ,cu doar o apasare de buton,care marca si pretul celei mai
                scumpe masini vandute de catre sediul nostru.
              </p>
              <QuestionMarkIcon className="icon" onClick={getMarcaPret} />
            </div>
            <div className="numberBox">
              {numberMarPre === 1 && (
                <div className="marcaPret">
                  <p className="marca">Marca: {returnedDataMarcaPret.Marca}</p>
                  <p className="pret">
                    Pret: {returnedDataMarcaPret.PretDeVanzare} $
                  </p>
                </div>
              )}
            </div>
            <div className="iconBox">
              <p>
                Afla ,cu doar o apasare de buton,cate masini au fost vandute de
                catre sediul nostru cu pretul de pana in valorea pe care o
                stabilesti chiar tu.
              </p>
            </div>
            <div className="vandutBox">
              <div className="inputContainerJoinV">
                <TextField
                  label={"Pret"}
                  id="filled-hidden-label-small"
                  variant="filled"
                  size="small"
                  onChange={pretVanduteHandler}
                  className="idInput"
                />
                <Button className="searchButton" onClick={getNrVa}>
                  Search
                </Button>
              </div>
            </div>
            <div className="numberBox">
              {numberVandut === 1 && (
                <div className="vandut">{returnedDataVandut.Numar}</div>
              )}
            </div>
            <div className="iconBox">
              <p>
                Afla ,cu doar o apasare de buton,cate tipuri de masini de dupa
                anul 2007 avem in stoc, a caror fiabilitate este notata ca fiind
                ridicata.
              </p>
              <QuestionMarkIcon className="icon" onClick={getFiabAn} />
            </div>
            <div className="numberBox">
              {fiabAn === 1 && (
                <p className="fiab">{returnedDataFiabilitate.Numar}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
