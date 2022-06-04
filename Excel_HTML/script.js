alumno_json = JSON.parse(bd)

function alumno_to_html(nombres,apellidos,edad,ciudad){
alumno = '<div class="alumno">';
alumno += '<span> nombres: '+nombres+' </span>';
alumno += '<span> apellidos: '+apellidos+' </span>';
alumno += '<span> edad: '+edad+' </span>';
alumno += '<span> ciudad: '+ciudad+' </span>';
alumno += '</div>';
return alumno;
}

alumno_html="";

for (var i=0; i<alumno_json.length; i++){
    console.log('Hola Alumnos');
    nombres = alumno_json[i].nombres;
    apellidos = alumno_json[i].apellidos;   
    edad = alumno_json[i].edad;
    ciudad = alumno_json[i].ciudad;
    alumno_html += alumno_to_html(nombres,apellidos,edad,ciudad)
}

document.querySelector('.alumno') .innerHTML = alumno_html