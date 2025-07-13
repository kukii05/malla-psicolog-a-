
const ramos = [
  {
    "id": "fund_neuro",
    "nombre": "Fundamentos Neuroanat\u00f3micos",
    "semestre": 1,
    "prereqs": []
  },
  {
    "id": "fund_socio",
    "nombre": "Fundamentos Socioculturales",
    "semestre": 1,
    "prereqs": []
  },
  {
    "id": "proc_psico1",
    "nombre": "Procesos Psicol\u00f3gicos I",
    "semestre": 1,
    "prereqs": []
  },
  {
    "id": "taller_hab1",
    "nombre": "Taller de Habilidades Profesionales I",
    "semestre": 1,
    "prereqs": []
  },
  {
    "id": "intro_psico",
    "nombre": "Introducci\u00f3n a la Psicolog\u00eda",
    "semestre": 1,
    "prereqs": []
  },
  {
    "id": "electivo_com1",
    "nombre": "Electivo de Comunicaci\u00f3n",
    "semestre": 1,
    "prereqs": []
  },
  {
    "id": "epistemo",
    "nombre": "Epistemolog\u00eda Aplicada a la Psicolog\u00eda",
    "semestre": 2,
    "prereqs": []
  },
  {
    "id": "proc_psico2",
    "nombre": "Procesos Psicol\u00f3gicos II",
    "semestre": 2,
    "prereqs": [
      "proc_psico1"
    ]
  },
  {
    "id": "taller_hab2",
    "nombre": "Taller de Habilidades Profesionales II",
    "semestre": 2,
    "prereqs": [
      "taller_hab1"
    ]
  },
  {
    "id": "teorias1",
    "nombre": "Teor\u00edas Psicol\u00f3gicas I",
    "semestre": 2,
    "prereqs": []
  },
  {
    "id": "electivo_com2",
    "nombre": "Electivo de Comunicaci\u00f3n II",
    "semestre": 2,
    "prereqs": []
  },
  {
    "id": "intro_neuro",
    "nombre": "Introducci\u00f3n a la Neurociencia",
    "semestre": 3,
    "prereqs": [
      "fund_neuro"
    ]
  },
  {
    "id": "psico_personalidad",
    "nombre": "Psicolog\u00eda de la Personalidad",
    "semestre": 3,
    "prereqs": [
      "proc_psico1"
    ]
  },
  {
    "id": "psico_social",
    "nombre": "Psicolog\u00eda Social",
    "semestre": 3,
    "prereqs": [
      "proc_psico2"
    ]
  },
  {
    "id": "psico_edad",
    "nombre": "Psicolog\u00eda del Desarrollo I",
    "semestre": 3,
    "prereqs": []
  },
  {
    "id": "teorias2",
    "nombre": "Teor\u00edas Psicol\u00f3gicas II",
    "semestre": 3,
    "prereqs": [
      "teorias1"
    ]
  },
  {
    "id": "electivo_pensamiento",
    "nombre": "Electivo de Pensamiento",
    "semestre": 3,
    "prereqs": []
  },
  {
    "id": "neuropsico",
    "nombre": "Neuropsicolog\u00eda",
    "semestre": 4,
    "prereqs": [
      "intro_neuro"
    ]
  },
  {
    "id": "eval_psicometrica",
    "nombre": "Evaluaci\u00f3n Psicom\u00e9trica",
    "semestre": 4,
    "prereqs": []
  },
  {
    "id": "interv_grupos",
    "nombre": "Intervenci\u00f3n Psicosocial con Grupos",
    "semestre": 4,
    "prereqs": [
      "psico_social"
    ]
  },
  {
    "id": "psico_adolescencia",
    "nombre": "Psicolog\u00eda del Desarrollo II",
    "semestre": 4,
    "prereqs": [
      "psico_edad"
    ]
  },
  {
    "id": "teorias3",
    "nombre": "Teor\u00edas Psicol\u00f3gicas III",
    "semestre": 4,
    "prereqs": [
      "teorias2"
    ]
  },
  {
    "id": "eval_proyectiva",
    "nombre": "Evaluaci\u00f3n Proyectiva",
    "semestre": 5,
    "prereqs": [
      "eval_psicometrica"
    ]
  },
  {
    "id": "interv_socio",
    "nombre": "Intervenci\u00f3n Socio-comunitaria",
    "semestre": 5,
    "prereqs": [
      "interv_grupos"
    ]
  },
  {
    "id": "inv_psico",
    "nombre": "Introducci\u00f3n a la Investigaci\u00f3n",
    "semestre": 5,
    "prereqs": []
  },
  {
    "id": "met_cuant1",
    "nombre": "Metodolog\u00eda Cuantitativa I",
    "semestre": 5,
    "prereqs": []
  },
  {
    "id": "psico_org",
    "nombre": "Psicolog\u00eda Organizacional",
    "semestre": 5,
    "prereqs": []
  },
  {
    "id": "teorias4",
    "nombre": "Teor\u00edas Psicol\u00f3gicas IV",
    "semestre": 5,
    "prereqs": [
      "teorias3"
    ]
  },
  {
    "id": "electivo_personal",
    "nombre": "Electivo de Desarrollo Personal",
    "semestre": 5,
    "prereqs": []
  },
  {
    "id": "psicodiag_juvenil",
    "nombre": "Psicodiagn\u00f3stico Infanto Juvenil",
    "semestre": 6,
    "prereqs": [
      "eval_proyectiva"
    ]
  },
  {
    "id": "interv_org",
    "nombre": "Intervenci\u00f3n en Organizaciones",
    "semestre": 6,
    "prereqs": [
      "psico_org"
    ]
  },
  {
    "id": "met_cuant2",
    "nombre": "Metodolog\u00eda Cuantitativa II",
    "semestre": 6,
    "prereqs": [
      "met_cuant1"
    ]
  },
  {
    "id": "psicopatologia1",
    "nombre": "Psicopatolog\u00eda y Psicofarmacolog\u00eda I",
    "semestre": 6,
    "prereqs": []
  },
  {
    "id": "electivo_resp",
    "nombre": "Electivo de Responsabilidad Social",
    "semestre": 6,
    "prereqs": []
  },
  {
    "id": "psicodiag_adulto",
    "nombre": "Psicodiagn\u00f3stico Adulto",
    "semestre": 7,
    "prereqs": [
      "psicodiag_juvenil"
    ]
  },
  {
    "id": "interv_infanto",
    "nombre": "Intervenci\u00f3n Cl\u00ednica Infanto Juvenil",
    "semestre": 7,
    "prereqs": [
      "psicodiag_juvenil"
    ]
  },
  {
    "id": "proyecto_tesis",
    "nombre": "Proyecto de Tesis",
    "semestre": 7,
    "prereqs": [
      "inv_psico"
    ]
  },
  {
    "id": "psico_educacion",
    "nombre": "Psicolog\u00eda de la Educaci\u00f3n",
    "semestre": 7,
    "prereqs": []
  },
  {
    "id": "desempeno_psico",
    "nombre": "Desempe\u00f1o \u00c9tico del Psic\u00f3logo",
    "semestre": 8,
    "prereqs": []
  },
  {
    "id": "interv_adulto",
    "nombre": "Intervenci\u00f3n Cl\u00ednica Adulto",
    "semestre": 8,
    "prereqs": [
      "psicodiag_adulto"
    ]
  },
  {
    "id": "seminario_tesis",
    "nombre": "Seminario de Tesis",
    "semestre": 8,
    "prereqs": [
      "proyecto_tesis"
    ]
  },
  {
    "id": "interv_contexto",
    "nombre": "Intervenci\u00f3n en Contextos Escolares",
    "semestre": 8,
    "prereqs": [
      "psico_educacion"
    ]
  },
  {
    "id": "practica1",
    "nombre": "Pr\u00e1ctica Avanzada I",
    "semestre": 9,
    "prereqs": [
      "interv_infanto",
      "interv_adulto"
    ]
  },
  {
    "id": "psicopatologia2",
    "nombre": "Psicopatolog\u00eda y Psicofarmacolog\u00eda II",
    "semestre": 9,
    "prereqs": [
      "psicopatologia1"
    ]
  },
  {
    "id": "psico_juridica",
    "nombre": "Psicolog\u00eda Jur\u00eddica",
    "semestre": 9,
    "prereqs": []
  },
  {
    "id": "psico_salud",
    "nombre": "Psicolog\u00eda de la Salud",
    "semestre": 9,
    "prereqs": []
  },
  {
    "id": "optativo1",
    "nombre": "Optativo de Especialidad I",
    "semestre": 9,
    "prereqs": []
  },
  {
    "id": "optativo2",
    "nombre": "Optativo de Especialidad II",
    "semestre": 9,
    "prereqs": []
  },
  {
    "id": "practica2",
    "nombre": "Pr\u00e1ctica Avanzada II",
    "semestre": 10,
    "prereqs": [
      "practica1"
    ]
  },
  {
    "id": "optativo3",
    "nombre": "Optativo de Especialidad III",
    "semestre": 10,
    "prereqs": []
  },
  {
    "id": "optativo4",
    "nombre": "Optativo de Especialidad IV",
    "semestre": 10,
    "prereqs": []
  },
  {
    "id": "electivo_etica",
    "nombre": "Electivo de \u00c9tica",
    "semestre": 10,
    "prereqs": []
  }
];

const estado = {};

const malla = document.getElementById('malla');

ramos.forEach(ramo => {
  const div = document.createElement('div');
  div.className = 'ramo bloqueado';
  div.id = ramo.id;
  div.innerHTML = `
    <strong>${ramo.nombre}</strong><br>
    Semestre: ${ramo.semestre}<br>
    <button onclick="marcarAprobado('${ramo.id}')">Marcar aprobado</button>
  `;
  malla.appendChild(div);
  estado[ramo.id] = false;
});

function actualizarMalla() {
  ramos.forEach(ramo => {
    const bloque = document.getElementById(ramo.id);
    const prereqsOk = ramo.prereqs.every(pr => estado[pr]);
    bloque.classList.toggle('bloqueado', !prereqsOk && ramo.prereqs.length > 0 && !estado[ramo.id]);
    bloque.querySelector('button').disabled = !prereqsOk;
    bloque.classList.toggle('aprobado', estado[ramo.id]);
  });
}

function marcarAprobado(id) {
  estado[id] = true;
  actualizarMalla();
}

actualizarMalla();
