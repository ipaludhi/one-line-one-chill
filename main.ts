// One Line, One Chill — entry program (Node 22, stdlib only).
// Writes one original horror line to /output/entry.txt: a family recipe card
// whose last instruction, in grandma's handwriting, is to stir until *he*
// stops screaming. The scare is what the line withholds — who he is, what is
// in the pot, how long grandma knew — and the last word lands the blow.
// Deterministic: no network, no randomness, no input — every run writes
// byte-identical output.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "My grandmother's recipe card ends with one line in her handwriting: 'Stir until he stops screaming.'";

// Gate self-check: the sealed scorer requires 1-200 non-blank UTF-8 chars.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`line must be 1-200 non-blank characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
