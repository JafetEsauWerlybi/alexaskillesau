const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido, Calculadora de aplicaciones basicas de Esaú que vamos a hacer hoy?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hola mundo!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = '¡Puedes saludarme! ¿Cómo puedo ayudar?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Adiós!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no sé nada de eso. Inténtalo de nuevo.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Sesion terminada: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `Intentaste hacer ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, tuve problemas para hacer lo que me pediste. Inténtalo de nuevo.';
        console.log(`~~~~ Error encontrado: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SumaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SumaIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.numerouno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.numerodos.value;
        var numero1 = Number(cantidad)
        var numero2 = Number(cantidadd)
        if (isNaN(numero1) || isNaN(numero2)||  numero1=== undefined || numero2=== undefined) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        let resultado = 0;
        resultado = numero1 + numero2;
        const speakOutput = `Calculadora UTHH Esaú... El resultado de la suma de ${numero1} mas ${numero2} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const RestaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestaIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.numerouno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.numerodos.value;
        var numero1 = Number(cantidad);
        var numero2 = Number(cantidadd);
        if (isNaN(numero1) || isNaN(numero2)||  numero1=== undefined || numero2=== undefined) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        let resultado = numero1 - numero2;
        const speakOutput = `Calculadora UTHH Esaú... El resultado de la resta de ${numero1} menos ${numero2} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const DivisionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivisionIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.numerouno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.numerodos.value;
        var numero1 = Number(cantidad);
        var numero2 = Number(cantidadd);
        if (isNaN(numero1) || isNaN(numero2)||  numero1=== undefined || numero2=== undefined) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        if (numero2 === 0) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no se puede dividir por cero. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        let resultado = numero1 / numero2;
        const speakOutput = `Calculadora UTHH Esaú... El resultado de la división de ${numero1} entre ${numero2} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const MultiplicacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicacionIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.numerouno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.numerodos.value;
        var numero1 = Number(cantidad);
        var numero2 = Number(cantidadd);
        if (isNaN(numero1) || isNaN(numero2)||  numero1=== undefined || numero2=== undefined) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        let resultado = numero1 * numero2;
        const speakOutput = `Calculadora UTHH Esaú... El resultado de la multiplicación de ${numero1} por ${numero2} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const PotenciaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PotenciaIntent';
    },
    handle(handlerInput) {
        const base = handlerInput.requestEnvelope.request.intent.slots.numerouno.value;
        const exponente = handlerInput.requestEnvelope.request.intent.slots.numerodos.value;
        var numeroBase = Number(base);
        var numeroExponente = Number(exponente);
        if (isNaN(numeroBase) || isNaN(numeroExponente)||  numeroBase=== undefined || numeroExponente=== undefined) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        let resultado = Math.pow(numeroBase, numeroExponente);
        const speakOutput = `Calculadora UTHH Esaú... El resultado de ${numeroBase} elevado a la potencia de ${numeroExponente} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const SenoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SenoIntent';
    },
    handle(handlerInput) {
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.numerouno.value;
        var numero = Number(cantidad);
        if (isNaN(numero || numero === undefined)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender el número. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        let resultado = Math.sin(numero);
        const speakOutput = `Calculadora UTHH Esaú... El seno de ${numero} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        PotenciaIntentHandler,
        SenoIntentHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        DivisionIntentHandler,
        MultiplicacionIntentHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
