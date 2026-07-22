# beidou-3dtiles

**3D Tiles 北斗网格化剖分工具**

`beidou-3dtiles` 是一款专为 3D Tiles 数据设计的高性能网格化剖分工具。该工具深度融合了北斗网格码体系，能够将复杂的 3D Tiles 数据（如 B3DM）精准映射到标准化的三维网格中。通过创新的剖分算法与并行处理架构，本工具旨在解决大规模三维地理空间数据在网格化管理、空间索引及跨瓦片数据一致性方面的难题。

## ✨ 功能特性
- ✅ 支持 B3DM 瓦片解析
- ✅ 三种剖分策略可选 (顶点/重心/包围盒)
- ✅ 动态网格层级配置
- ✅ 三维网格码 (含高度)
- ✅ 跨瓦片去重后处理
- ✅ 本地/在线数据源支持
- ✅ 断点续传
- ✅ Worker 线程并行处理

## 🚀 快速开始

### 环境要求

- Node.js >= 16.x
- npm 或 yarn

### 安装

```bash
# 克隆项目
git clone https://github.com/your-username/beidou-3dtiles.git
cd beidou-3dtiles

# 安装依赖
npm install
```
### 使用示例

```bash
 const response = await fetch('/api/convert', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        src: './data/output/grid_index_dedup.jsonl', // 本地文件路径（相对于项目根目录）
        relationId: '74e3edcc-b6f5-4848-a6ca-6bc212c96454', // 模型唯一标识，用于数据库记录
        style: JSON.stringify({
            mode: 'face',
            color: '#f00',
            opacity: 0.5,
        }),
        maxGridsPerTile: 3, // 每个 B3DM 文件最大网格数
        preset: 'line-red', // 内置预设
        streaming: true, // 流式处理模式
        workers: 4, // Worker 线程数
        enableLod: true, // 启用 LOD 层级推导
        lodMinLevel: 5, // LOD 最低层级
        batchMode: true, // 启用单体化模式
    }),
 })
```
