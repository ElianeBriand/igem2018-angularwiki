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
 /*
  new PageChunkRecord("/support","support_chunk.base64.txt"),
  new PageChunkRecord("/team","team_chunk.base64.txt")
  //*/
]
