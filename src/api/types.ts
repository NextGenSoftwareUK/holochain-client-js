export type HoloHash = Buffer; // length 39
export type AgentPubKey = HoloHash;
export type InstalledAppId = string;
export type CapSecret = Buffer;
export type CellId = [HoloHash, AgentPubKey];
export type CellNick = string;
export type DnaProperties = any;
export type SlotId = string;

export type InstalledCell = {
  cell_id: CellId;
  cell_nick: CellNick;
};

export type DeactivationReason =
  | { never_activated: null }
  | { normal: null }
  | { quarantined: { error: string } };

export type PausedAppReason = {
  error: string;
};
export type DisabledAppReason =
  | {
      never_started: null;
    }
  | { user: null }
  | { error: string };

export type InstalledAppInfoStatus =
  | {
      paused: { reason: PausedAppReason };
    }
  | {
      disabled: {
        reason: DisabledAppReason;
      };
    }
  | {
      running: null;
    };

export type InstalledAppInfo = {
  installed_app_id: InstalledAppId;
  cell_data: Array<InstalledCell>;
  status: InstalledAppInfoStatus;
};
export type MembraneProof = Buffer;

export const fakeAgentPubKey = (x: any) =>
  Buffer.from(
    [0x84, 0x20, 0x24].concat(
      "000000000000000000000000000000000000"
        .split("")
        .map((x) => parseInt(x, 10))
    )
  );
