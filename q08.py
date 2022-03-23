from operator import truediv


def move(log):
    n = 12
    if len(log) == n + 1:
        return 1
    cnt = 0

    dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    for dir in dirs:
        next_pos = [log[len(log) - 1][0] + dir[0], log[len(log) - 1][1] + dir[1]]
        if not include(log, next_pos):
            log.append(next_pos)
            cnt += move(log)
    return cnt


def include(log, pos):
    for l in log:
        if l[0] == pos[0] & l[1] == pos[1]:
            return True
    return False

print(move([[0,0]]))