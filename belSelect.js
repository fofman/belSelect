document.querySelectorAll(".belSelect").forEach(select => {
    select.addEventListener("change", evento => {
        let indiceSelezionato = select.selectedIndex;
        let opzioneSelezionata = select.options[indiceSelezionato];
        opzioneSelezionata.hidden = true;
        let boxSelezionato = document.createElement("label");
        boxSelezionato.className="belSelezionato";
        boxSelezionato.innerHTML = `<input type="checkbox" value="${opzioneSelezionata.value}" name="${select.id}[]" checked hidden> <span class="belSelect-x">×</span> <span class="belSelect-optText">${opzioneSelezionata.text}</span>`
        boxSelezionato.addEventListener("change", e => {
            let valore = boxSelezionato.querySelector("input").value;
            boxSelezionato.remove();
            let opzioneDaRimettere = select.querySelector(`option[value='${valore}']`);
            opzioneDaRimettere.hidden = false;
        });
        document.getElementById(`${select.id}-selected`).appendChild(boxSelezionato);
    })
})