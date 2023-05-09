const locators = {
    INICIAL_VALIDATION: {
        P_MENTORIA: 'p.MuiTypography-root.jss4.MuiTypography-body1'
    },
    ENTRANCE_BUTTON: {
        BUTTON_ENTRANCE: 'button.MuiButtonBase-root'
    },
    CAMP_TXT: {
        INPUT_NAME_FIELD: 'input#id_campo_nome',
        INPUT_LASTNAME_FIELD: '//input[@name="sobrenome"]',
        INPUT_EMAIL_FIELD: 'input#id_campo_email',
        TEXTAREA_DESCRIPTION_FIELD: 'textarea#id_campo_descricao'
    },
    RADIO_BUTTON: {
        INPUT_LINKEDIN_RADIO_BUTTON: 'input#id_Linkedin'
    },
    CHECK_BOX: {
        IMPUT_CHECKBOX_SELENIUM: 'input#id_checkbox_selenium',
        INPUT_CHECKBOX_ROBOT: 'input#id_checkbox_robotFramework'
    },
    SELECT: {
        SELECT_SIMPLE: 'select#id_campo_linguagemProgramacaoSimples',
        DIV_SELECT_MULTIPLE: 'div#mui-component-select-linguagemProgramacao',
        INPUT_SELECT_MULTIPLE: 'input[name="multiplaSelecao"]'
    },
    CONFIRM_BUTTON: {
       BUTTON_CONFIRM: "#btn_confirm"
    },
    FINAL_VALIDATION: {
        TOAST: ".Toastify__toast-body > :nth-child(2)"
    }
}

export default locators