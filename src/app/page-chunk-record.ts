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

export let PAGE_CHUNK_MASTER_RECORD = [
 //*
  new PageChunkRecord("/support","http://2018.igem.org/wiki/images/9/91/T--GO_Paris-Saclay--support_chunk.base64.txt"),
  new PageChunkRecord("/team","http://2018.igem.org/wiki/images/7/74/T--GO_Paris-Saclay--team_chunk.base64.txt"),
  new PageChunkRecord("/labnotebook","http://2018.igem.org/wiki/images/0/02/T--GO_Paris-Saclay--labnotebook_chunk.base64.txt"),
  new PageChunkRecord("/attribution","http://2018.igem.org/wiki/images/5/5a/T--GO_Paris-Saclay--attribution_chunk.base64.txt"),
  new PageChunkRecord("/biology","http://2018.igem.org/wiki/images/1/15/T--GO_Paris-Saclay--biology_chunk.base64.txt")
  
  //*/
]
