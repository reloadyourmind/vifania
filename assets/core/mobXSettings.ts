import { configure } from 'mobx';

export const configureMobX = () => {
    setTimeout(() => {
        configure({
            reactionScheduler(f) {
                setTimeout(f, 1);
            },
        });
    }, 1);
};
