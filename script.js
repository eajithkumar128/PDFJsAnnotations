var pdf = new PDFAnnotate('pdf-container', 'http://pdftest.test/pdf.pdf');

function enableSelector(event) {
    event.preventDefault();
    var element = ($(event.target).hasClass('tool-button')) ? $(event.target) : $(event.target).parents('.tool-button').first();
    $('.tool-button.active').removeClass('active');
    $(element).addClass('active');
    pdf.enableSelector();
}

function enablePencil(event) {
    event.preventDefault();
    var element = ($(event.target).hasClass('tool-button')) ? $(event.target) : $(event.target).parents('.tool-button').first();
    $('.tool-button.active').removeClass('active');
    $(element).addClass('active');
    pdf.enablePencil();
}

function enableAddText(event) {
    event.preventDefault();
    var element = ($(event.target).hasClass('tool-button')) ? $(event.target) : $(event.target).parents('.tool-button').first();
    $('.tool-button.active').removeClass('active');
    $(element).addClass('active');
    pdf.enableAddText();
}

function enableAddArrow(event) {
    event.preventDefault();
    var element = ($(event.target).hasClass('tool-button')) ? $(event.target) : $(event.target).parents('.tool-button').first();
    $('.tool-button.active').removeClass('active');
    $(element).addClass('active');
    pdf.enableAddArrow();
}

function deleteSelectedObject() {
    event.preventDefault();
    pdf.deleteSelectedObject();
}

function savePDF() {
    pdf.savePdf();
}

function clearPage() {
    pdf.clearActivePage();
}

function showPdfData() {
    var string = pdf.serializePdf();
    $('#dataModal .modal-body pre').first().text(string);
    PR.prettyPrint();
    $('#dataModal').modal('show');
}

$(function () {
    $('.color-tool').click(function () {
        $('.color-tool.active').removeClass('active');
        $(this).addClass('active');
        color = $(this).get(0).style.backgroundColor;
        pdf.setColor(color);
    });

    $('#brush-size').change(function () {
        var width = $(this).val();
        pdf.setBrushSize(width);
    });

    $('#font-size').change(function () {
        var font_size = $(this).val();
        pdf.setFontSize(font_size);
    });
});
