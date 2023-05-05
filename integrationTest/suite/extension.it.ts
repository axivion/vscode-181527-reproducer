import { getExtension } from '../utils';

// there is no way to skip loading a mocked module from __mocks__
// we need to unmock the vscode module in all integration tests
jest.unmock('vscode');

describe('Bootstrap test', () => {
    const extension = getExtension();

    test('vscode loads and activates our extension successfully', () => {
        expect(extension.isActive).toEqual(true);
    });
});
