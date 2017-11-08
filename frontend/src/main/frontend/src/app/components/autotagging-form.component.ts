import { Component } from '@angular/core';

import { AutotaggingForm }    from './autotagging-form';

@Component({
  selector: 'app-autotagging-form',
  templateUrl: './autotagging-form.component.html'
})
export class AutotaggingFormComponent {

  apis = ["Google", "Clarify", "Amazon"];
  submitted = false;
  model = new AutotaggingForm();
  searchKeywordsString: string;
  targetKeywordsString: string;
  recipientsString: string;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  parseSearchKeywords() {
      this.model.searchKeywords = this.parseKeywords(this.searchKeywordsString);
  }

  parseTargetKeywords() {
      this.model.targetKeywords = this.parseKeywords(this.targetKeywordsString);
  }

  parseKeywords(keywordsString: string) {
      return keywordsString.split("\,").filter(function(n){ return n !== "" });
  }

  parseRecipients() {
      this.model.recipients = this.recipientsString.split("\,").filter(function(n){ return n !== "" });
  }
}
