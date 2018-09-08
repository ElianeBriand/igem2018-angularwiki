export class PageChunkRecord {
  public pageName: string;
  public chunkURL: string;
  public chunkLoaded: boolean;

  constructor(pageName:string, chunkURL: string) {
    this.pageName = pageName;
    this.chunkURL = chunkURL;
    this.chunkLoaded = false;
  }
}

export class SpeciaPageRecord {
  public specialPageName: string;
  public chunkRecordPageName: string;
  public navTo: string;

  constructor(specialPageName:string, chunkRecordPageName: string, navto: string) {
    this.specialPageName = specialPageName;
    this.chunkRecordPageName = chunkRecordPageName;
    this.navTo = navto;
  }
}

export let PAGE_CHUNK_MASTER_RECORD = [
 //*
  new PageChunkRecord("/support","http://2018.igem.org/wiki/images/9/91/T--GO_Paris-Saclay--support_chunk.base64.txt"),
  new PageChunkRecord("/team","http://2018.igem.org/wiki/images/7/74/T--GO_Paris-Saclay--team_chunk.base64.txt"),
  new PageChunkRecord("/labnotebook","http://2018.igem.org/wiki/images/0/02/T--GO_Paris-Saclay--labnotebook_chunk.base64.txt"),
  new PageChunkRecord("/attribution","http://2018.igem.org/wiki/images/5/5a/T--GO_Paris-Saclay--attribution_chunk.base64.txt"),
  new PageChunkRecord("/biology","http://2018.igem.org/wiki/images/1/15/T--GO_Paris-Saclay--biology_chunk.base64.txt")
  
  //*/
]

export let SPECIAL_PAGE_CHUNK_MASTER_RECORD = [
  //*
  new SpeciaPageRecord("/Attributions","/attribution", "/attribution"),
  new SpeciaPageRecord("/InterLab","/biology", "/biology/interlab"),
  new SpeciaPageRecord("/Collaborations", "#MAIN#", "/collaborations"),
  new SpeciaPageRecord("/Software", "#MAIN#", "/software"),
  new SpeciaPageRecord("/Human_Practices", "#MAIN#", "/human-practices"),
  new SpeciaPageRecord("/Model", "#MAIN#", "/modeling"),
  new SpeciaPageRecord("/Improve", "#MAIN#", "/improve"),
  new SpeciaPageRecord("/Demonstrate", "#MAIN#", "/demonstrate"),
  new SpeciaPageRecord("/Team", "/team", "/team"),
  new SpeciaPageRecord("/Design", "#MAIN#", "/project"),
  new SpeciaPageRecord("/Description", "#MAIN#", "/project"),


  //*/
]
