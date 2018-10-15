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

export class ImagePreloadRecord {
  public url: string;
  public mime: string

  constructor(url: string, mime:string) {
    this.url = url;
    this.mime = mime;
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
  new SpeciaPageRecord("/Improve", "/biology", "/biology/J23108"),
  new SpeciaPageRecord("/Demonstrate", "#MAIN#", "/demonstrate"),
  new SpeciaPageRecord("/Team", "/team", "/team"),
  new SpeciaPageRecord("/Design", "#MAIN#", "/project"),
  new SpeciaPageRecord("/Description", "#MAIN#", "/project"),
  new SpeciaPageRecord("/Applied_Design", "#MAIN#", "/project"),
  new SpeciaPageRecord("/Part_Collection", "/biology", "/biology/parts-collection")

  //*/
]

export let IMAGE_PRELOAD_MASTER_RECORD = [
  new ImagePreloadRecord("http://2018.igem.org/wiki/images/9/90/T--GO_Paris-Saclay--empty-banner.png", "image/png"),
  new ImagePreloadRecord("http://2018.igem.org/wiki/images/0/03/T--GO_Paris-Saclay--fond_groupe.png", "image/png"),
  new ImagePreloadRecord("http://2018.igem.org/wiki/images/1/1b/T--GO_Paris-Saclay--tableau_banner.png", "image/png"),
  new ImagePreloadRecord("http://2018.igem.org/wiki/images/d/dd/T--GO_Paris-Saclay--parts_underbanner.png", "image/png"),
  new ImagePreloadRecord("http://2018.igem.org/wiki/images/c/c8/T--GO_Paris-Saclay--stagedlab_underbanner.png", "image/png"),
  new ImagePreloadRecord("http://2018.igem.org/wiki/images/8/82/T--GO_Paris-Saclay--interlab_underbanner.png", "image/png"),
  new ImagePreloadRecord("http://2018.igem.org/wiki/images/0/08/T--GO_Paris-Saclay--software_underbanner.png", "image/png"),
  new ImagePreloadRecord("http://2018.igem.org/wiki/images/c/c6/T--GO_Paris-Saclay--team_underbanner.png", "image/png"),

  new ImagePreloadRecord("http://2018.igem.org/wiki/images/d/db/T--GO_Paris-Saclay--bacteria_anim.mp4", "video/mp4")

];


