let elementID = 1

$(document).ready(function () {
    // <s><li id="name-id-li" onclick="elementClick = this.id;elementClicked()">fff</li></s>
    $('form').on('submit', function (e) {
        e.preventDefault();
        let nameCB = "C" + elementID
        const taskName = $('#task-name-content').val();


        const newTask = $(`<div></div>`);
        $(`

            <li>
                <input type="checkbox" id="${nameCB}" /><label for="${nameCB}">${taskName}</label>
            </li>
            
        `).appendTo(newTask);

        $(newTask).appendTo('ul');
        elementID++;
    })    
})