const CustomModelBase = require('./customModelBase');


class Mistral7b extends CustomModelBase {
    constructor(options) {
      super(options);
      // Provider ID can be overridden by the config file (e.g. when using multiple of the same provider)
      this.providerId = options.id || 'custom provider';
  
      // options.config contains any custom options passed to the provider
      this.config = options.config;

      this.model_file_name = "mistral-7b-instruct-v0.1-Q4_K_M-main.llamafile"
        
      this.model_short_name = "mistral-7b-inst"
    }
  
    id() {
      return this.providerId;
    }

    customizePrompt(prompt) {
        return `[INST]${prompt}[/INST]`
    }
  }
  
  module.exports = Mistral7b;