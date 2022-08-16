$(document).ready(function () {

    $.getJSON('https://restcountries.com/v3.1/all', function(data) {
        $.each(data, function(cca3, pais) {
            $("#nacionalidad").append('<option name="' + cca3 + '">' + pais.name.common + '</option>');
        }); // close each()
    }); // close getJSON()
    
});

function regMemoriaLocal(valor) {
    if (typeof (Storage) !== undefined) {
        var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));
        var arreglo = new Array();
        if (memRegistro == null) {
            arreglo[0] = valor;
        } else {
            arreglo = memRegistro;
        }
        localStorage.setItem("memRegistro", JSON.stringify(arreglo));
    }
}

    function cargarPantalla() {

        if (typeof (Storage) !== "undefined") {

            var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));
            if (memRegistro != null) {
                $.ajax({
                    type: "get",
                    url: "https://restcountries.com/v3.1/all",
                    dataType: "json",

                    success: function (data) {

                        $.each(data, function (i, pais) {
                            let cca3_1 = pais.cca3;
                            let nombrePais1 = pais.name.common;
                            if (nombrePais1 === "Costa Rica") {
                                let fila1 = "<option value='" + cca3_1 + "' selected='selected' onClick='regMemoriaLocal(" + cca3_1 + ")'>" + nombrePais1 + "</option>";
                                $(".search>#nacionalidad").append(fila1);
                            }
                            let fila1 = "<option value='" + cca3_1 + "' onClick='regMemoriaLocal(" + cca3_1 + ")'>" + nombrePais1 + "</option>";
                            $(".search>#nacionalidad").append(fila1);
                        })

                    }
                });
            }
        }
    }