## Documentació d'IA Generativa

**Eina i model d'IA usat:** Gemini 3.6 Flash

### Prompts Literals Utilitzats

1. *"¿Qué diferencia hay entre usar .populate() en Mongoose y hacer dos consultas separadas?"*
2. *"¿Para qué sirve exactamente el método .lean() al final de un find() en MongoDB?"*
3. *"¿Cómo hago para enlazar la nueva colección de Project con la colección de Organization en Mongoose usando Typescript?"*
4. *"¿Cómo hago para exportar varias funciones asíncronas desde un archivo en TypeScript para hacer un Service Layer sin usar clases?"*

### Incoherències Detectades i Adaptació Manual

- **Del prompt 1:** Em va ajudar a entendre per què la rúbrica demanava usar `populate` per obtenir les dades de l'organització en lloc de fer consultes anidades.
- **Del prompt 2:** L'explicació va ser massa extensa. La vaig resumir al concepte principal: converteix els documents de Mongoose en objectes plans de JavaScript, i ho vaig aplicar a la funció `listAllProjects()`.
- **Del prompt 3:** El codi que va generar la IA usava la sintaxi antiga de Mongoose sense interfícies de TypeScript. El vaig adaptar manualment per usar `Schema.Types.ObjectId` tipat dins la interfície `IProject`.
- **Del prompt 4:** La IA va donar la resposta usant la sintaxi antiga `module.exports` de CommonJS. Ho vaig adaptar manualment per usar `export async function` propi d'ESModules, que és la configuració d'aquest projecte.
