// Select2 Plugin Initialization
$(document).ready(function() {
    $('.select2').css("width", "100%")
    $('.select2').select2({
        matcher: matchCustom,
        templateResult: formatCustom
    })
})


function stringMatch(term, candidate) {
    return candidate && candidate.toLowerCase().indexOf(term.toLowerCase()) >= 0;
}

function matchCustom(params, data) {
    // If there are no search terms, return all of the data
    if ($.trim(params.term) === '') {
        return data;
    }
    // Do not display the item if there is no 'text' property
    if (typeof data.text === 'undefined') {
        return null;
    }
    // Match text of option
    if (stringMatch(params.term, data.text)) {
        return data;
    }
    // Match attribute "data-foo" of option
    if (stringMatch(params.term, $(data.element).attr('data-icon'))) {
        return data;
    }
    if (stringMatch(params.term, $(data.element).attr('data-text'))) {
        return data;
    }

    if (stringMatch(params.term, $(data.element).attr('data-abbr'))) {
        return data;
    }
    // Return `null` if the term should not be displayed
    return null;
}

function formatCustom(state) {
    return $(
        `<div class="d-flex align-items-center">
			<div class="width-20 height-20 d-flex align-items-center justify-content-center bg-gradient-cyan-blue  rounded-2 ms-n1">
				<i class="dataIcon ${$(state.element).attr('data-icon')}"></i>
			</div>
			<div class="flex-fill ps-2 pe-2">
				<div class="font-weight-600">${state.text}</div>
				<div class="select2-sub-txt">${$(state.element).attr('data-text')}</div>
			</div>
			<div class="select2-data-abbr">${$(state.element).attr('data-abbr')}</div>
		</div>`
    );
}