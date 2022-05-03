Promise.resolve()
  .then(() => alert('promise'))
  .then(() => alert('another promise'));

/**
    Aquí lo que sucede es que se resuelve una promesa, es decir, lo que esté dentro de ella se ejecutará con prioridad
    luego del código síncrono, entonces como únicamente se encuentra esa línea de código se ejecuta la primera alerta
    con el valor de 'promise' y después la segunda con valor de 'another promise'.
  */
