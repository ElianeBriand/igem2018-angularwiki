


export class HPLCRecords {
  public name: string;
  public url: string;
  public group: number;

  constructor(name: string, url: string, group: number) {
    this.name = name;
    this.url = url;
    this.group = group;
  }
}



export class HPLCGroup {
  public name: string;
  public records: HPLCRecords[];
  constructor(name: string, records: HPLCRecords[])
  {
    this.name = name;
    this.records = records;
  }
}

export var HPLC_GROUPS_RECORD = [
  new HPLCGroup("No bacteria (reference)", [
    new HPLCRecords("MTX 512uM (without bacteria)", "http://2018.igem.org/wiki/images/3/3e/T--GO_Paris-Saclay--HPLC_MTX-NoBact_05h.png",0),
    new HPLCRecords("DAMPA 512uM (without bacteria)", "http://2018.igem.org/wiki/images/8/86/T--GO_Paris-Saclay--HPLC_DampaStandard.png", 0),
    new HPLCRecords("DMSO 2% (without bacteria)", "http://2018.igem.org/wiki/images/f/f5/T--GO_Paris-Saclay--HPLC_DMSO-NoBact_05h.png", 0),
  ]),
  new HPLCGroup("Control plasmid", [
    new HPLCRecords("MTX 512uM with pSB1C3-tet (in WT chassis) after 20h", "http://2018.igem.org/wiki/images/3/33/T--GO_Paris-Saclay--HPLC_MTX-WT-tet_20h.png", 2),
    new HPLCRecords("MTX 512uM with pSB1C3-tet (in WT chassis) after 5h", "http://2018.igem.org/wiki/images/c/ce/T--GO_Paris-Saclay--HPLC_MTX-WT-tet_05h.png", 2),
    new HPLCRecords("MTX 512uM with pSB1C3-tet (in ΔtolC chassis) after 5h", "http://2018.igem.org/wiki/images/5/5e/T--GO_Paris-Saclay--HPLC_MTX-DtolC-tet_05h.png", 4),
    new HPLCRecords("MTX 512uM with pSB1C3-tet (in ΔtolC chassis) after 20h", "http://2018.igem.org/wiki/images/4/42/T--GO_Paris-Saclay--HPLC_MTX-DtolC-tet_20h.png", 4),
  ]),
  new HPLCGroup("Degradation pathway", [
    new HPLCRecords("MTX 512uM with pSB1C3-folC-cpg2 (in WT chassis) after 5h", "http://2018.igem.org/wiki/images/9/9a/T--GO_Paris-Saclay--HPLC_MTX-WT-fc_05h.png", 5),
    new HPLCRecords("MTX 512uM with pSB1C3-folC-cpg2 (in WT chassis) after 20h", "http://2018.igem.org/wiki/images/b/b2/T--GO_Paris-Saclay--HPLC_MTX-WT-fc_20h.png", 5),
    new HPLCRecords("MTX 512uM with pSB1C3-folC-cpg2 (in ΔtolC chassis) after 5h", "http://2018.igem.org/wiki/images/7/7e/T--GO_Paris-Saclay--HPLC_MTX-DtolC-fc_05h.png", 6),
    new HPLCRecords("MTX 512uM with pSB1C3-folC-cpg2 (in ΔtolC chassis) after 20h", "http://2018.igem.org/wiki/images/b/b1/T--GO_Paris-Saclay--HPLC_MTX-DtolC-fc_20h.png", 6),
  ]),
  new HPLCGroup("ΔtolC chassis", [
    new HPLCRecords("MTX 512uM with pSB1C3-tet (in ΔtolC chassis) after 5h", "http://2018.igem.org/wiki/images/5/5e/T--GO_Paris-Saclay--HPLC_MTX-DtolC-tet_05h.png", 4),
    new HPLCRecords("MTX 512uM with pSB1C3-tet (in ΔtolC chassis) after 20h", "http://2018.igem.org/wiki/images/4/42/T--GO_Paris-Saclay--HPLC_MTX-DtolC-tet_20h.png", 4),
    new HPLCRecords("MTX 512uM with pSB1C3-folC-cpg2 (in ΔtolC chassis) after 5h", "http://2018.igem.org/wiki/images/7/7e/T--GO_Paris-Saclay--HPLC_MTX-DtolC-fc_05h.png", 6),
    new HPLCRecords("MTX 512uM with pSB1C3-folC-cpg2 (in ΔtolC chassis) after 20h", "http://2018.igem.org/wiki/images/b/b1/T--GO_Paris-Saclay--HPLC_MTX-DtolC-fc_20h.png", 6),
  ]),
  new HPLCGroup("DMSO Controls", [
    new HPLCRecords("DMSO 2% with pSB1C3-tet (in WT chassis) after 20h", "http://2018.igem.org/wiki/images/4/42/T--GO_Paris-Saclay--HPLC_DMSO-WT-tet_20h.png",3),
    new HPLCRecords("DMSO 2% with pSB1C3-tet (in ΔtolC chassis) after 5h", "http://2018.igem.org/wiki/images/7/7b/T--GO_Paris-Saclay--HPLC_DMSO-DtolC-tet_05h.png", 3),
    new HPLCRecords("DMSO 2% with pSB1C3-tet (in ΔtolC chassis) after 20h", "http://2018.igem.org/wiki/images/c/c4/T--GO_Paris-Saclay--HPLC_DMSO-DtolC-tet_20h.png", 3),
    new HPLCRecords("DMSO 2% with pSB1C3-folC-cpg2 (in WT chassis) after 5h", "http://2018.igem.org/wiki/images/d/d9/T--GO_Paris-Saclay--HPLC_DMSO-WT-fc_05h.png", 7),
    new HPLCRecords("DMSO 2% with pSB1C3-folC-cpg2 (in WT chassis) after 20h", "http://2018.igem.org/wiki/images/d/d8/T--GO_Paris-Saclay--HPLC_DMSO-WT-fc_20h.png", 7),
    new HPLCRecords("DMSO 2% with pSB1C3-folC-cpg2 (in ΔtolC chassis) after 5h", "http://2018.igem.org/wiki/images/6/65/T--GO_Paris-Saclay--HPLC_DMSO-DtolC-fc_05h.png", 8),
    new HPLCRecords("DMSO 2% with pSB1C3-folC-cpg2 (in ΔtolC chassis) after 20h", "http://2018.igem.org/wiki/images/f/fd/T--GO_Paris-Saclay--HPLC_DMSO-DtolC-fc_20h.png", 8)
  ]),
]



