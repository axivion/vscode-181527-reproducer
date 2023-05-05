class Version {
    static from4Parts(_one: number, _two: number, _three: number, _four: number) {
        return new Version();
    }
}

export const version = Version.from4Parts(7, 6, 9999, 0);
export const versionNumberString = '7.6.9999.0';
export const versionName = 'trunk-r0';
export const date = '1970-01-01';
/** Seconds since epoche. */
export const buildUnixtime = 0;
